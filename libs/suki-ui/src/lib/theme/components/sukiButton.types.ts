type SukiButtonText = {
  active: string;
  disabled: string;
  hover: string;
  normal: string;
};

type SukiButton = {
  fontSize: string;
  fontWeight: number;
  height: string;
  iconPadding: string;
  lineHeight: string;
  minWidth: string;
  padding: string;
  buttonText: {
    background: SukiButtonText;
    boxShadow: string;
    color: SukiButtonText;
  };
  contained: {
    background: SukiButtonText;
    boxShadow: string;
    color: SukiButtonText;
  };
  outlined: {
    background: SukiButtonText;
    boxShadow: string;
    color: SukiButtonText;
  };
  text: {
    background: SukiButtonText;
    boxShadow: string;
    color: SukiButtonText;
  };
};

export { SukiButton };
