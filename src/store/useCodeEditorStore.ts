import { create } from "zustand";
import * as monaco from "monaco-editor";
import { CodeEditorState } from "./../types/index";

// Get initial state from local storage or fallback to defaults
const getInitialState = () => {
  if (typeof window === "undefined") {
    return {
      language: "javascript",
      fontSize: 16,
      theme: "vs-dark",
    };
  }

  const savedLanguage = localStorage.getItem("editor-language") || "javascript";
  const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
  const savedFontSize = localStorage.getItem("editor-font-size") || 16;

  return {
    language: savedLanguage,
    theme: savedTheme,
    fontSize: Number(savedFontSize),
  };
};

// Create Zustand store for managing the Code Editor state
export const useCodeEditorStore = create<CodeEditorState>((set, get) => {
  const initialState = getInitialState();

  return {
    ...initialState,
    output: "",
    isRunning: false,
    error: null,
    editorInstance: null,  // Initial state for Monaco editor instance
    // Removed executionResult from state as it's not needed

    // Get code from the editor
    getCode: () => {
      const editor = get().editorInstance;
      if (editor) {
        return editor.getValue(); // Ensure this is the correct editor instance
      }
      return "";
    },

    // Set the Monaco editor instance
    setEditorInstance: (editor: monaco.editor.IStandaloneCodeEditor) => {
      set({ editorInstance: editor });
    },

    // Set the editor theme
    setTheme: (theme: string) => {
      localStorage.setItem("editor-theme", theme);
      set({ theme });
    },

    // Set the editor font size
    setFontSize: (fontSize: number) => {
      localStorage.setItem("editor-font-size", fontSize.toString());
      set({ fontSize });
    },

    // Set the language for the editor
    setLanguage: (language: string) => {
      localStorage.setItem("editor-language", language);
      set({
        language,
        output: "",
        error: null,
      });
    },

    // Run the code (API call simulation)
    runCode: async () => {
      const { language, getCode } = get();
      const code = getCode();

      if (!code) {
        set({ error: "Please enter some code" });
        return;
      }

      set({ isRunning: true, error: null, output: "" });

      try {
        const runtime = { language: "javascript", version: "latest" }; // Simplified runtime
        const response = await fetch("https://emkc.org/api/v2/piston/execute", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language: runtime.language,
            version: runtime.version,
            files: [{ content: code }],
          }),
        });

        const data = await response.json();

        if (data.message) {
          set({ error: data.message });
          return;
        }

        if (data.run && data.run.code !== 0) {
          const error = data.run.stderr || data.run.output;
          set({ error });
          return;
        }

        const output = data.run.output;
        set({
          output: output.trim(),
          error: null,
        });
      } catch (error) {
        set({
          error: "Error running code",
        });
      } finally {
        set({ isRunning: false });
      }
    },

    // Placeholder for upcoming functionality
    comingSoon: () => {
      set({ output: "Coming soon!" });
    },
  };
});
