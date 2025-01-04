import * as monaco from "monaco-editor";
import { Id } from "../../convex/_generated/dataModel";

// Interface for Theme
export interface Theme {
  id: string;
  label: string;
  color: string;
}

// Interface for Language
export interface Language {
  id: string;
  label: string;
  logoPath: string;
  monacoLanguage: string;
  defaultCode: string;
  pistonRuntime: LanguageRuntime;
}

// Interface for Language Runtime
export interface LanguageRuntime {
  language: string;
  version: string;
}

// Interface for Execution Response
export interface ExecuteCodeResponse {
  compile?: {
    output: string;
  };
  run?: {
    output: string;
    stderr: string;
  };
}

// Interface for Execution Result
export interface ExecutionResult {
  code: string;
  output: string;
  error: string | null;
}

// Interface for Code Editor State
export interface CodeEditorState {
  executionResult: ExecutionResult | null;  // Refined the type for executionResult
  language: string;
  theme: string;
  fontSize: number;
  output: string;
  isRunning: boolean;
  error: string | null;
  editorInstance: monaco.editor.IStandaloneCodeEditor | null; // Add this for Monaco Editor instance
  getCode: () => string;
  setEditorInstance: (editor: monaco.editor.IStandaloneCodeEditor) => void;
  setTheme: (theme: string) => void;
  setFontSize: (fontSize: number) => void;
  setLanguage: (language: string) => void;
  runCode: () => Promise<void>;
}

// Interface for Snippets
export interface Snippet {
  _id: Id<"snippets">;
  _creationTime: number;
  userId: string;
  language: string;
  code: string;
  title: string;
  userName: string;
}
