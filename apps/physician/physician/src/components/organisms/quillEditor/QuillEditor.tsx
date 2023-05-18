import ReactQuill from "react-quill";
import { FunctionComponent, useEffect, useRef } from "react";
import Quill, { DeltaStatic, Sources } from "react-quill/node_modules/@types/quill";

interface QuillEditorProps {
  compositionId: string;
  onBlur: () => void;
  onFocus: () => void;
  onChange: (htmlContent: string, delta: DeltaStatic, source: Sources, editor: any) => void;
  onMount: (quillRef: any) => void; // Need to make sure to padd Quill ref always
  readOnly: boolean;
  sectionId: string;
  testId: string; // Need to figure the usecase of testId
  value?: string;
}

const QuillEditor: FunctionComponent<QuillEditorProps> = ({
  compositionId,
  onBlur,
  onFocus,
  onChange,
  onMount,
  readOnly = false,
  sectionId,
  testId,
  value
}) => {
  const quillEditorRef = useRef<Quill | any>(null); // Revisit the logic of adding any to ref

  useEffect(() => {
    onMount(quillEditorRef);
  }, [quillEditorRef]);

  return (
    <div data-cy={testId} key={`quill-editor--${compositionId}-section-${sectionId}`}>
      <ReactQuill onBlur={onBlur} onChange={onChange} readOnly={readOnly} ref={quillEditorRef} value={value} />;
    </div>
  );
};

export default QuillEditor;

export { QuillEditor, QuillEditorProps };
