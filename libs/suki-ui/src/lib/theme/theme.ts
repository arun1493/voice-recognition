import { SukiButton } from "./components";
import { typography, typographyThemeType } from "./typography";

type BreakpointKeysType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

type ThemeProvider = {
  breakpoints: {
    keys: string[];
    values: Record<BreakpointKeysType, number>;
    up: (key: BreakpointKeysType) => string;
    down: (key: BreakpointKeysType) => string;
    only: (key: BreakpointKeysType) => string;
    not: (key: BreakpointKeysType) => string;
    between: (start: BreakpointKeysType, end: BreakpointKeysType) => string;
    unit: string;
  };
  common: {
    borderBottom: string;
    borderTop: string;
    pageBackground: string;
    pageColor: string;
  };
  components: {
    appSkeleton: {
      background: string;
      color: string;
    };
    button: {
      backgroundColor: {
        active: string;
        disabled: string;
        hovered: string;
        primary: string;
        secondary: string;
      };
      borderColor: {
        dark: string;
        disabled: string;
        normal: string;
      };
      boxShadowColor: {
        primaryActive: string;
        primaryNotDisabledHovered: string;
      };
      color: {
        primary: string;
        secondary: string;
      };
      disabled: {
        color: {
          primary: string;
          secondary: string;
        };
      };
    };
    capturingIndicator: {
      background: string;
    };
    card: {
      background: string;
      borderColor: string;
      color: string;
    };
    checkbox: {
      backgroundColor: string;
      borderColor: string;
      errorColor: string;
      hoveredBackgroundColor: string;
    };
    datePicker: {
      backgroundColor: {
        active: string;
        current: string;
        primary: string;
        secondary: string;
      };
      color: {
        active: string;
        dateControls: string;
        primary: string;
        secondary: string;
      };
    };
    dialog: {
      button: {
        backgroundColor: {
          focused: string;
          hovered: string;
          primary: string;
          secondary: string;
        };
        color: {
          primary: string;
          secondary: string;
        };
      };
      closeIconColor: string;
    };
    emrConnectionToolbar: {
      backgroundColor: string;
    };
    fab: {
      background: {
        normal: string;
        hover: string;
        active: string;
        disabled: string;
      };
      boxShadow: string;
      size: {
        sm: number;
        md: number;
      };
    };
    formInput: {
      backgroundColor: {
        focused: string;
        hovered: string;
        normal: string;
      };
      borderColor: {
        error: string;
        focused: string;
      };
      caretColor: {
        normal: string;
      };
      color: {
        disabled: string;
      };
      shadowColor: {
        focused: string;
        normal: string;
      };
    };
    gettingStarted: {
      backgroundColor: string;
      borderColor: string;
      closeButton: {
        background: string;
        backgroundActive: string;
        backgroundHover: string;
        boxShadow: string;
        color: string;
      };
      textColor: string;
    };
    header: {
      color: string;
    };
    icon: {
      color: {
        black: string;
        blueGray: string;
        darkGray: string;
        green: string;
        lightGray: string;
        lighterGray: string;
        offWhite: string;
        orange: string;
        white: string;
      };
    };
    iconButton: {
      background: {
        active: string;
        disabled: string;
        hover: string;
        primary: string;
      };
      color: {
        active: string;
        disabled: string;
        hover: string;
        primary: string;
      };
      sizes: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
      };
    };
    icd10Lookup: {
      background: string;
      color: string;
      header: {
        background: string;
        border: string;
      };
      hovered: string;
      list: {
        active: string;
        background: string;
        boldColor: string;
        border: string;
        codeColor: string;
        color: string;
        hovered: string;
      };
      moreResultsTextColor: string;
      poweredByTextColor: string;
      shadow: string;
    };
    initialsAvatar: {
      backgroundColor: string;
      color: string;
    };
    insertScriptMenuListItem: {
      hoveredItemBackgroundColor: string;
      selectedBackgroundColor: string;
    };
    kebabMenu: {
      backgroundColor: string;
      shadowColor: string;
    };
    link: {
      color: {
        hovered: string;
        normal: string;
        visited: string;
      };
    };
    linkButton: {
      color: {
        hover: string;
        active: string;
      };
    };
    listPanel: {
      activeBackgroundColor: string;
      borderBottomColor: string;
      disabledColor: string;
      hoveredBackgroundColor: string;
    };
    noteCell: {
      color: {
        subtitle: string;
        title: string;
      };
    };
    mainMenu: {
      backgroundColor: string;
      separatorColor: string;
    };
    modal: {
      backgroundColor: {
        backdrop: string;
        primary: string;
        secondary: string;
      };
      borderColor: string;
      borderRadius: string;
      boxShadow: string;
      closeIcon: {
        color: string;
      };
      color: string;
      maskColor: string;
      signNote: {
        confirmCodes: {
          background: {
            active: string;
            hovered: string;
          };
          borderColor: string;
          epicWarningColor: string;
          icdCode: {
            background: string;
            color: string;
          };
          secondaryTextColor: string;
        };
        confirmSignButton: {
          activeColor: string;
          hoverBorderColor: string;
          normalBorderColor: string;
        };
        secondaryButton: {
          background: string;
          borderColor: string;
          color: string;
        };
      };
    };
    modalFooter: {
      borderColor: string;
      color: string;
    };
    multipleEncounters: {
      borderColor: string;
      color: string;
    };
    navigationHeaderIcon: {
      hoveredBackgroundColor: string;
      hoveredColor: string;
      selectedBackgroundColor: string;
    };
    fabButton: {
      activeBackgroundColor: string;
      backgroundColor: string;
      boxShadow: string;
      hoveredBackgroundColor: string;
    };
    noteMenu: {
      backgroundColor: string;
    };
    noteMenuListItem: {
      activeItemBackgroundColor: string;
      hoveredItemBackgroundColor: string;
    };
    noteSubmissionButton: {
      activeBackgroundColor: string;
      backgroundColor: string;
      boxShadow: string;
      hoveredBackgroundColor: string;
    };
    noteTypes: {
      activeItemBackgroundColor: string;
      hoveredItemBackgroundColor: string;
    };
    pageHeader: {
      backgroundColor: string;
      border: string;
      linkColor: string;
    };
    patientCell: {
      color: string;
      disabledColor: string;
      nameColor: string;
    };
    patientProfile: {
      border: string;
      button: {
        background: string;
        backgroundActive: string;
        backgroundHovered: string;
        border: string;
        color: string;
      };
      color: string;
      timeColor: string;
    };
    patientSearch: {
      background: {
        normal: string;
      };
      borderColor: string;
      boxShadow: string;
      clearBtnBorderColor: string;
      clearBtnTextColor: string;
      hoveredBackgroundColor: string;
      secondaryTextColor: string;
      selectedBackgroundColor: string;
      textColor: string;
    };
    patientsListDropDown: {
      backgroundColor: string;
      boxShadow: string;
      itemBorderColor: string;
      itemClickBackgroundColor: string;
      itemFontColor: string;
      itemHoverBackgroundColor: string;
    };
    patientsMenu: {
      backgroundColor: string;
      boxShadow: string;
    };
    progressBar: {
      completedColor: string;
      pendingColor: string;
    };
    ring: {
      color: string;
    };
    scrollbar: {
      scrollTrack: string;
      thumbColor: string;
      thumbHoveredColor: string;
    };
    searchPatients: {
      color: string;
    };
    select: {
      activeItemBackgroundColor: string;
      backgroundColor: string;
      borderColor: string;
      color: string;
      errorColor: string;
      hoveredItemBackgroundColor: string;
    };
    stickyHeader: {
      background: string;
    };
    suggestion: {
      background: string;
      color: string;
      insertButtonColor: string;
    };
    suggestionsPanel: {
      background: string;
      boxShadow: string;
      color: string;
      hovered: string;
    };
    sukiButton: Record<"sm" | "md" | "lg", SukiButton>;
    sukiListItem: {
      bottomBorder: string;
      simple: {
        background: {
          active: string;
          hover: string;
        };
        height: string[];
      };
      color: {
        background: {
          active: string;
          hover: string;
        };
        height: string[];
      };
      small: {
        background: {
          active: string;
          hover: string;
        };
        height: string[];
      };
      title: {
        background: {
          active: string;
          hover: string;
        };
        height: string[];
      };
    };
    sukiListItemTitle: {
      fontWeight: number[];
      fontSize: string[];
      padding: string;
      simple: {
        fontColor: string;
        fontSize: string[];
        height: string[];
      };
      color: {
        fontColor: string;
        fontSize: string[];
        height: string[];
      };
      small: {
        fontColor: string;
        height: string[];
        fontSize: string[];
      };
      title: {
        fontColor: string;
        height: string[];
        fontSize: string[];
      };
    };
    sukiListItemSubtitle: {
      simple: {
        fontColor: string;
        fontSize: string[];
      };
      color: {
        fontColor: string;
        fontSize: string[];
      };
      small: {
        fontColor: string;
        fontSize: string[];
      };
      title: {
        fontColor: string;
        fontSize: string[];
      };
    };
    sukiIcon: {
      color: {
        error: string;
        inherit: string;
        primary: string;
        secondary: string;
        warning: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    termsCaption: {
      linkColor: string;
    };
    text: {
      baseColor: string;
      black: string;
      green: string;
      white: string;
    };
    textField: {
      background: { normal: string; hover: string; active: string; disabled: string };
      border: {
        color: string;
        errorColor: string;
      };
      borderRadius: string;
      boxShadow: { normal: string; hover: string; active: string; disabled: string; error: string };
      color: {
        normal: string;
        hover: string;
        active: string;
        disabled: string;
      };
      caretColor: string;
      font: {
        size: string;
        weight: number;
      };
      helperText: {
        color: {
          normal: string;
          error: string;
        };
      };
      placeholder: {
        normal: string;
        hover: string;
        disabled: string;
      };
    };
    themePicker: {
      thumbnail: {
        border: {
          color: {
            checked: string;
          };
        };
      };
    };
    toast: {
      confirmation: {
        backgroundColor: string;
        color: string;
      };
      error: {
        backgroundColor: string;
      };
      info: {
        backgroundColor: string;
      };
      secondaryConfirmation: {
        backgroundColor: string;
      };
      severe: {
        backgroundColor: string;
      };
      tip: {
        backgroundColor: string;
      };
    };
    tooltip: {
      background: string;
    };
    typography: typographyThemeType;
    unfinishedNotesBadge: {
      backgroundColor: string;
    };
    videoPlayer: {
      closeButton: {
        backgroundColor: string;
        borderColor: string;
      };
    };
    whatCanISay: {
      helpButtonColor: string;
      placeholderColor: string;
    };
  };
  font: {
    family: string;
    weight: {
      bold: number;
      regular: string;
      semiBold: number;
    };
  };
  pages: {
    help: {
      activeItemBackgroundColor: string;
      backgroundColor: string;
      borderColor: string;
      hoveredItemBackgroundColor: string;
      sectionBackgroundColor: string;
      statusColors: {
        lightGray: string;
        lightOrange: string;
        orange: string;
        yellowGreen: string;
        yellowOrange: string;
      };
    };
    home: {
      backgroundColor: string;
    };
    login: {
      backgroundColor: string;
    };
    note: {
      addProblemButton: {
        background: string;
        color: string;
        disabled: string;
        focused: string;
      };
      backgroundColor: string;
      borderColor: string;
      card: {
        arrowIcon: string;
        background: string;
        borderColor: string;
        buttonTextColor: string;
        color: string;
        emptyCard: {
          color: string;
        };
        shadowColor: string;
        vitals: {
          background: string;
          border: string;
        };
      };
      controlMenu: {
        background: string;
        border: string;
      };
      problemSection: {
        buttonBackground: string;
        buttonBorder: string;
        buttonOutline: string;
        buttonShadow: string;
        iconBackground: string;
        outline: string;
      };
      readOnlyTip: {
        background: string;
        tipShadow: string;
      };
      sections: {
        activeTextColor: string;
        dictationModeFocusEdgeColor: string;
        disabledTextColor: string;
        focusBackgroundColor: string;
        focusEdgeColor: string;
        fontColor: string;
        footerColor: string;
        hoverBackgroundColor: string;
        htmlSectionBackgroundColor: string;
        intermediateTextColor: string;
      };
      showCardButton: {
        background: string;
        buttonFocused: string;
        buttonHovered: string;
        buttonShadow: string;
      };
    };
    pageNotFound: {
      backgroundColor: string;
    };
    password: {
      backgroundXS: string;
      contentBackground: string;
      contentBorderColor: string;
      footerColor: string;
      input: {
        borderColor: string;
        color: string;
        errorBorderColor: string;
      };
    };
    patients: {
      activeColor: string;
      activeItemBackgroundColor: string;
      backgroundActiveColor: string;
      backgroundColor: string;
      border: string;
      hoveredItemBackgroundColor: string;
      sectionBackgroundColor: string;
      tabs: {
        activeStateColor: string;
        defaultColor: string;
      };
      weakBorder: string;
      zeroState: {
        textColor: string;
      };
    };
    payments: {
      backgroundColor: string;
    };
    registerSuccess: {
      background: string;
      color: string;
      footerColor: string;
      listItemNumber: {
        background: string;
        color: string;
      };
      login: {
        background: string;
      };
    };
    settings: {
      backgroundActiveColor: string;
      backgroundColor: string;
      backgroundHoveredColor: string;
      borderColor: string;
      button: {
        color: {
          primary: string;
        };
      };
      emptyListTextColor: string;
      noteType: {
        color: string;
        inputTipColor: string;
        platterBackgroundColor: string;
        platterLabelColor: string;
      };
      placeholderColor: string;
      problemBasedLabel: {
        backgroundColor: string;
      };
      sectionBackgroundColor: string;
      sectionBorderColor: string;
      sectionOptions: {
        backgroundColor: string;
        backgroundColorHover: string;
        boxShadow: string;
        color: {
          active: string;
          normal: string;
          problemBased: string;
        };
      };
    };
    signUp: {
      background: string;
      errorColor: string;
      fieldBorderColor: string;
      formBackground: string;
      formBorderColor: string;
      input: {
        activeBackground: string;
        background: string;
        border: string;
        hoverBackground: string;
      };
      linkColor: string;
      placeholderColor: string;
      registrationEmail: {
        backgroundColor: string;
        borderColor: string;
        secondaryTextColor: string;
      };
      sukiLogoColor: string;
    };
    windowsDownload: {
      backgroundColor: {
        bottomContainer: string;
        downloadButton: string;
        hoveredDownloadButton: string;
        topContainer: string;
      };
    };
    unfinishedNotes: {
      backgroundColor: string;
      borderColor: string;
      boxShadowColor: string;
      sectionBackgroundColor: string;
    };
    xLiteSuccess: {
      background: string;
      color: string;
    };
  };
  palette: {
    primary: {
      black: string;
      black2: string;
      black3: string;
      black4: string;
      black5: string;
      black10: string;
      black15: string;
      black20: string;
      black25: string;
      black30: string;
      black35: string;
      black40: string;
      black50: string;
      black85: string;
      blackOlive1: string;
      blackOlive: string;
      blackOlive90: string;
      casal: string;
      corn: string;
      dark: string;
      darker: string;
      darkGreen: string;
      davysGray: string;
      eerieBlack: string;
      graniteGray: string;
      green: string;
      green85: string;
      lightGreen: string;
      platinum: string;
      white: string;
      yellow: string;
      zomp: string;
    };
    secondary: {
      blackGray: string;
      blue: string;
      dark: string;
      darkCharcoal: string;
      darkGray: string;
      gray: string;
      green: string;
      gunmetal: string;
      lemonGinger: string;
      lightBlue: string;
      lightGreen: string;
      lightOrange: string;
      lighterGray: string;
      lightestGray: string;
      mahogany: string;
      offWhite: string;
      orange: string;
      pink: string;
      sea: string;
      spanishGray: string;
      veryLightGray: string;
      vividGreen: string;
      yellowGreen: string;
      yellowOrange: string;
    };
  };
  spacing: (space: number) => string;
  themeId: string;
};

const breakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  },
  up: (key: BreakpointKeysType) => `@media (min-width: ${breakpoints.values[key]}${breakpoints.unit})`,
  down: (key: BreakpointKeysType) => `@media (max-width: ${breakpoints.values[key]}${breakpoints.unit})`,
  only: (key: BreakpointKeysType) => {
    const nextBreakpoint = breakpoints.keys[breakpoints.keys.indexOf(key) + 1] as BreakpointKeysType;
    const nextBreakpointValue = breakpoints.values[nextBreakpoint] - 0.05;
    return `@media (min-width: ${breakpoints.values[key]}${breakpoints.unit}) and (max-width: ${nextBreakpointValue}${breakpoints.unit})`;
  },
  not: (key: BreakpointKeysType) => {
    const nextBreakpoint = breakpoints.keys[breakpoints.keys.indexOf(key) + 1] as BreakpointKeysType;
    const nextBreakpointValue = breakpoints.values[nextBreakpoint] - 0.05;
    return `@media not all and (min-width: ${breakpoints.values[key]}${breakpoints.unit}) and (max-width: ${nextBreakpointValue}${breakpoints.unit})`;
  },
  between: (start: BreakpointKeysType, end: BreakpointKeysType) => {
    const endValue = breakpoints.values[end] - 0.05;
    return `@media (min-width: ${breakpoints.values[start]}${breakpoints.unit}) and (max-width: ${endValue}${breakpoints.unit})`;
  },
  unit: "px"
};

const palette = {
  primary: {
    black: "#000",
    black2: "rgba(0, 0, 0, 0.02)",
    black3: "rgba(0, 0, 0, 0.03)",
    black4: "rgba(0, 0, 0, 0.04)",
    black5: "rgba(0, 0, 0, 0.05)",
    black10: "rgba(0, 0, 0, 0.1)",
    black15: "rgba(0, 0, 0, 0.15)",
    black20: "rgba(0, 0, 0, 0.2)",
    black25: "rgba(0, 0, 0, 0.25)",
    black30: "rgba(0, 0, 0, 0.3)",
    black35: "rgba(0, 0, 0, 0.35)",
    black40: "rgba(0, 0, 0, 0.4)",
    black50: "rgba(0, 0, 0, 0.5)",
    black67: "rgba(0, 0, 0, 0.67)",
    black80: "rgba(0, 0, 0, 0.80)",
    black85: "rgba(0, 0, 0, 0.85)",
    black90: "rgba(0, 0, 0, 0.90)",
    blackOlive1: "#3c3c3c",
    blackOlive: "#404040",
    blackOlive90: "rgba(64, 64, 64, 0.90)",
    casal: "#2c6464",
    corn: "#f6ec62",
    dark: "#2c2c2c",
    darker: "#1f1e1e",
    darkGray: "#424242",
    darkGreen: "#176063",
    davysGray: "#595959",
    eerieBlack: "#1f1e1e",
    graniteGray: "#616161",
    gray3: "rgba(33, 33, 33, 0.03)",
    green: "#2e5f62",
    green85: "rgba(46, 95, 98, 0.85)",
    lightGreen: "#e1e9df",
    platinum: "#e6e6e6",
    white: "#ffffff",
    yellow: "#fcf238",
    zomp: "#339999"
  },
  secondary: {
    blackGray: "#555555",
    blue: "#16b9cd",
    blueGray: "#767680",
    dark: "#1f1e1e",
    darkCharcoal: "#333333",
    darkGray: "#777777",
    gray: "#e6e6e6",
    green: "#587f81",
    gunmetal: "#273636",
    lemonGinger: "#ddd458",
    lightBlue: "#73dcd8",
    lightGray: "#999999",
    lightGreen: "#e1e9df",
    lighterGreen: "rgba(225, 233, 223, 0.5)",
    lightOrange: "#fbe1c2",
    lighterGray: "#cccccc",
    lightestGray: "#f2f2f2",
    mahogany: "#cb4b4b",
    offWhite: "#f0f4ef",
    orange: "#ffa015",
    outerSpace: "#464646",
    pink: "#ffccbb",
    sea: "#2e4d4d",
    silver: "#f7f7f7",
    spanishGray: "#939393",
    veryLightGray: "#fafafa",
    vividGreen: "#90fdde",
    yellowGreen: "#88a80d",
    yellowOrange: "#ffc543"
  }
};

const spacing = (space: number) => `${space * 8}px`;

const lightTheme: ThemeProvider = {
  breakpoints,
  common: {
    borderBottom: `box-shadow: inset 0 -1px 0 0 ${palette.primary.platinum};`,
    borderTop: `box-shadow: inset 0 1px 0 0 ${palette.primary.platinum};`,
    pageBackground: palette.secondary.offWhite,
    pageColor: palette.primary.black
  },
  components: {
    appSkeleton: {
      background: palette.secondary.offWhite,
      color: palette.primary.black
    },
    button: {
      backgroundColor: {
        active: palette.secondary.lightGreen,
        disabled: palette.secondary.lighterGray,
        hovered: palette.primary.black3,
        primary: palette.primary.green,
        secondary: "transparent"
      },
      borderColor: {
        dark: palette.primary.black,
        disabled: palette.primary.black20,
        normal: palette.primary.green
      },
      boxShadowColor: {
        primaryActive: palette.primary.black40,
        primaryNotDisabledHovered: palette.primary.black20
      },
      color: {
        primary: palette.primary.white,
        secondary: palette.primary.green
      },
      disabled: {
        color: {
          primary: palette.primary.white,
          secondary: palette.primary.black20
        }
      }
    },
    capturingIndicator: {
      background: palette.secondary.green
    },
    card: {
      background: palette.primary.white,
      borderColor: palette.primary.platinum,
      color: palette.primary.black
    },
    checkbox: {
      backgroundColor: palette.primary.white,
      borderColor: palette.secondary.lighterGray,
      errorColor: palette.secondary.orange,
      hoveredBackgroundColor: palette.secondary.lightestGray
    },
    datePicker: {
      backgroundColor: {
        active: palette.primary.green,
        current: palette.primary.black10,
        primary: palette.primary.white,
        secondary: palette.primary.green
      },
      color: {
        active: palette.primary.white,
        dateControls: palette.secondary.blackGray,
        primary: palette.primary.black,
        secondary: palette.secondary.lighterGray
      }
    },
    dialog: {
      button: {
        backgroundColor: {
          focused: palette.primary.lightGreen,
          hovered: palette.secondary.lightestGray,
          primary: "transparent",
          secondary: palette.primary.black4
        },
        color: {
          primary: palette.primary.green,
          secondary: palette.primary.black50
        }
      },
      closeIconColor: palette.secondary.lightGray
    },
    emrConnectionToolbar: {
      backgroundColor: palette.secondary.lightOrange
    },
    fab: {
      background: {
        normal: palette.primary.white,
        hover: palette.secondary.lightestGray,
        active: palette.secondary.lightGreen,
        disabled: palette.primary.white
      },
      boxShadow: `0px 4px 5px ${palette.primary.black10}, 0px 1px 10px ${palette.primary.black10}, 0px 2px 4px ${palette.primary.black10}`,
      size: {
        sm: 40,
        md: 48
      }
    },
    formInput: {
      backgroundColor: {
        focused: palette.primary.white,
        hovered: palette.secondary.lightestGray,
        normal: palette.secondary.silver
      },
      borderColor: {
        error: palette.secondary.orange,
        focused: palette.secondary.lighterGray
      },
      caretColor: {
        normal: palette.primary.green
      },
      color: {
        disabled: palette.primary.black35
      },
      shadowColor: {
        focused: palette.primary.black15,
        normal: palette.primary.black30
      }
    },
    gettingStarted: {
      backgroundColor: palette.primary.white,
      borderColor: palette.secondary.gray,
      closeButton: {
        background: palette.primary.white,
        backgroundActive: palette.primary.lightGreen,
        backgroundHover: palette.secondary.lightestGray,
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1)",
        color: palette.primary.green
      },
      textColor: palette.secondary.blackGray
    },
    header: {
      color: palette.primary.black
    },
    icon: {
      color: {
        black: palette.primary.black,
        blueGray: palette.secondary.blueGray,
        darkGray: palette.secondary.darkGray,
        green: palette.primary.green,
        lightGray: palette.secondary.lightGray,
        lighterGray: palette.secondary.lighterGray,
        offWhite: palette.secondary.offWhite,
        orange: palette.secondary.orange,
        white: palette.primary.white
      }
    },
    iconButton: {
      background: {
        active: palette.secondary.lightGreen,
        disabled: "transparent",
        hover: palette.primary.black10,
        primary: "transparent"
      },
      color: {
        active: palette.primary.green,
        disabled: palette.primary.black50,
        hover: palette.primary.green,
        primary: palette.primary.black
      },
      sizes: {
        xs: 18,
        sm: 20,
        md: 24,
        lg: 32
      }
    },
    icd10Lookup: {
      background: palette.primary.black3,
      color: palette.secondary.darkCharcoal,
      header: {
        background: palette.primary.white,
        border: palette.secondary.lighterGray
      },
      hovered: palette.primary.black3,
      list: {
        active: palette.primary.lightGreen,
        background: palette.secondary.offWhite,
        boldColor: palette.secondary.darkCharcoal,
        border: palette.primary.black20,
        codeColor: palette.secondary.green,
        color: "rgb(41, 64, 79)",
        hovered: palette.secondary.lightestGray
      },
      moreResultsTextColor: palette.secondary.blackGray,
      poweredByTextColor: palette.secondary.darkGray,
      shadow: palette.primary.black20
    },
    initialsAvatar: {
      backgroundColor: palette.secondary.lighterGreen,
      color: palette.primary.black
    },
    insertScriptMenuListItem: {
      hoveredItemBackgroundColor: palette.secondary.lightestGray,
      selectedBackgroundColor: palette.secondary.offWhite
    },
    kebabMenu: {
      backgroundColor: palette.primary.white,
      shadowColor: palette.primary.black20
    },
    link: {
      color: {
        hovered: palette.primary.green,
        normal: palette.primary.green,
        visited: palette.primary.green85
      }
    },
    linkButton: {
      color: {
        hover: palette.secondary.lightestGray,
        active: palette.secondary.lightGreen
      }
    },
    listPanel: {
      activeBackgroundColor: palette.secondary.offWhite,
      borderBottomColor: palette.secondary.gray,
      disabledColor: palette.primary.black35,
      hoveredBackgroundColor: palette.primary.black4
    },
    noteCell: {
      color: {
        subtitle: palette.secondary.blackGray,
        title: palette.secondary.darkCharcoal
      }
    },
    mainMenu: {
      backgroundColor: palette.primary.white,
      separatorColor: palette.primary.black10
    },
    modal: {
      backgroundColor: {
        backdrop: palette.primary.black5,
        primary: palette.primary.white,
        secondary: palette.secondary.offWhite
      },
      borderColor: palette.secondary.gray,
      borderRadius: "8px",
      boxShadow: "0 2px 32px 1px rgba(0, 0, 0, 0.2)",
      closeIcon: {
        color: palette.secondary.lighterGray
      },
      color: palette.primary.black,
      maskColor: palette.primary.black25,
      signNote: {
        confirmCodes: {
          background: {
            active: palette.primary.lightGreen,
            hovered: palette.secondary.lightestGray
          },
          borderColor: palette.secondary.lightGray,
          epicWarningColor: palette.secondary.lightGray,
          icdCode: {
            background: palette.secondary.silver,
            color: palette.secondary.darkGray
          },
          secondaryTextColor: palette.secondary.blackGray
        },
        confirmSignButton: {
          activeColor: palette.secondary.green,
          hoverBorderColor: palette.primary.green,
          normalBorderColor: palette.secondary.vividGreen
        },
        secondaryButton: {
          background: palette.secondary.lightestGray,
          borderColor: palette.secondary.darkGray,
          color: palette.secondary.darkGray
        }
      }
    },
    modalFooter: {
      borderColor: palette.secondary.gray,
      color: palette.primary.green
    },
    multipleEncounters: {
      borderColor: palette.secondary.lighterGray,
      color: palette.secondary.darkGray
    },
    navigationHeaderIcon: {
      hoveredBackgroundColor: palette.primary.black10,
      hoveredColor: palette.primary.green,
      selectedBackgroundColor: palette.secondary.lightGreen
    },
    fabButton: {
      activeBackgroundColor: palette.secondary.lightGreen,
      backgroundColor: palette.primary.white,
      boxShadow: `0px 4px 5px ${palette.primary.black10}, 0px 1px 10px ${palette.primary.black10}, 0px 2px 4px ${palette.primary.black10}`,
      hoveredBackgroundColor: palette.secondary.lightestGray
    },
    noteMenu: {
      backgroundColor: palette.primary.white
    },
    noteMenuListItem: {
      activeItemBackgroundColor: palette.secondary.lightGreen,
      hoveredItemBackgroundColor: palette.primary.black5
    },
    noteSubmissionButton: {
      activeBackgroundColor: palette.secondary.lightGreen,
      backgroundColor: palette.primary.white,
      boxShadow: `0px 4px 5px ${palette.primary.black10}, 0px 1px 10px ${palette.primary.black10}, 0px 2px 4px ${palette.primary.black10}`,
      hoveredBackgroundColor: palette.secondary.lightestGray
    },
    noteTypes: {
      activeItemBackgroundColor: palette.secondary.offWhite,
      hoveredItemBackgroundColor: palette.secondary.lightestGray
    },
    pageHeader: {
      backgroundColor: palette.primary.white,
      border: palette.secondary.gray,
      linkColor: palette.primary.green
    },
    patientCell: {
      color: palette.secondary.blackGray,
      disabledColor: palette.primary.black35,
      nameColor: palette.secondary.darkCharcoal
    },
    patientProfile: {
      border: palette.secondary.gray,
      button: {
        background: palette.primary.white,
        backgroundActive: palette.primary.lightGreen,
        backgroundHovered: palette.secondary.lightestGray,
        border: palette.secondary.darkGray,
        color: palette.secondary.darkGray
      },
      color: palette.secondary.lightGray,
      timeColor: palette.secondary.blackGray
    },
    patientSearch: {
      background: {
        normal: palette.primary.white
      },
      borderColor: palette.secondary.lighterGray,
      boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.1)",
      clearBtnBorderColor: palette.secondary.gray,
      clearBtnTextColor: palette.secondary.lightGray,
      hoveredBackgroundColor: palette.secondary.gray,
      secondaryTextColor: palette.secondary.blackGray,
      selectedBackgroundColor: palette.secondary.lightGreen,
      textColor: palette.secondary.darkCharcoal
    },
    patientsListDropDown: {
      backgroundColor: palette.primary.white,
      boxShadow: `0px 1px 10px ${palette.primary.black20}, 0px 3px 4px ${palette.primary.black10}`,
      itemBorderColor: "rgba(94, 121, 142, 0.2)",
      itemClickBackgroundColor: palette.secondary.offWhite,
      itemFontColor: palette.secondary.darkCharcoal,
      itemHoverBackgroundColor: palette.secondary.lightestGray
    },
    patientsMenu: {
      backgroundColor: palette.primary.white,
      boxShadow: `0px 1px 10px ${palette.primary.black20}, 0px 3px 4px ${palette.primary.black10}`
    },
    progressBar: {
      completedColor: palette.primary.green85,
      pendingColor: palette.primary.platinum
    },
    ring: {
      color: palette.secondary.blue
    },
    scrollbar: {
      scrollTrack: palette.primary.white,
      thumbColor: palette.secondary.lighterGray,
      thumbHoveredColor: palette.secondary.lightGray
    },
    searchPatients: {
      color: palette.secondary.lightGray
    },
    select: {
      activeItemBackgroundColor: palette.secondary.offWhite,
      backgroundColor: palette.primary.white,
      borderColor: palette.secondary.lighterGray,
      color: palette.secondary.lightGray,
      errorColor: palette.secondary.orange,
      hoveredItemBackgroundColor: palette.secondary.lightestGray
    },
    stickyHeader: {
      background: palette.primary.white
    },
    suggestion: {
      background: palette.secondary.offWhite,
      color: palette.primary.green,
      insertButtonColor: palette.secondary.darkGray
    },
    suggestionsPanel: {
      background: palette.secondary.silver,
      boxShadow: palette.primary.black10,
      hovered: "rgba(240, 244, 239, 0.5)",
      color: palette.secondary.darkGray
    },
    sukiButton: {
      sm: {
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "16px",
        height: "24px",
        minWidth: spacing(8),
        padding: `0 ${spacing(1)}`,
        iconPadding: `0 ${spacing(1)}`,
        buttonText: {
          background: {
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray,
            hover: palette.secondary.green,
            normal: "inherit"
          },
          boxShadow: "none",
          color: {
            active: palette.primary.green,
            disabled: palette.secondary.lighterGray,
            hover: palette.primary.white,
            normal: palette.primary.green
          }
        },
        contained: {
          background: {
            normal: palette.primary.green,
            hover: palette.secondary.green,
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.white,
            hover: palette.primary.white,
            active: palette.primary.green,
            disabled: palette.primary.white
          }
        },
        outlined: {
          background: {
            normal: palette.primary.white,
            hover: palette.secondary.lightestGray,
            active: palette.primary.lightGreen,
            disabled: palette.primary.white
          },
          boxShadow: `0 0 0 1px ${palette.secondary.lighterGray}`,
          color: {
            normal: palette.primary.green,
            hover: palette.primary.green,
            active: palette.primary.green,
            disabled: palette.secondary.lighterGray
          }
        },
        text: {
          background: {
            normal: palette.primary.white,
            hover: palette.secondary.lightestGray,
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.green,
            hover: palette.primary.green,
            active: palette.primary.green,
            disabled: palette.secondary.lighterGray
          }
        }
      },
      md: {
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        height: "40px",
        minWidth: spacing(12),
        padding: `0 ${spacing(1)}`,
        iconPadding: `0 ${spacing(1)}`,
        buttonText: {
          background: {
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray,
            hover: palette.secondary.green,
            normal: "inherit"
          },
          boxShadow: "none",
          color: {
            active: palette.primary.green,
            disabled: palette.secondary.lighterGray,
            hover: palette.primary.white,
            normal: palette.primary.green
          }
        },

        contained: {
          background: {
            normal: palette.primary.green,
            hover: palette.secondary.green,
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.white,
            hover: palette.primary.white,
            active: palette.primary.green,
            disabled: palette.primary.white
          }
        },
        outlined: {
          background: {
            normal: palette.primary.white,
            hover: palette.secondary.lightestGray,
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray
          },
          boxShadow: `0 0 0 1px ${palette.secondary.darkGray}`,
          color: {
            normal: palette.primary.green,
            hover: palette.primary.green,
            active: palette.primary.green,
            disabled: palette.secondary.lighterGray
          }
        },
        text: {
          background: {
            normal: palette.primary.white,
            hover: palette.secondary.lightestGray,
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.green,
            hover: palette.primary.green,
            active: palette.primary.green,
            disabled: palette.secondary.lighterGray
          }
        }
      },
      lg: {
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "24px",
        height: "56px",
        minWidth: spacing(27),
        padding: `0 ${spacing(10)}`,
        iconPadding: `0 ${spacing(4)} 0 ${spacing(4)}`,
        buttonText: {
          background: {
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray,
            hover: palette.secondary.green,
            normal: "inherit"
          },
          boxShadow: "none",
          color: {
            active: palette.primary.green,
            disabled: palette.secondary.lighterGray,
            hover: palette.primary.white,
            normal: palette.primary.green
          }
        },

        contained: {
          background: {
            normal: palette.primary.green,
            hover: palette.secondary.green,
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.white,
            hover: palette.primary.white,
            active: palette.primary.green,
            disabled: palette.primary.white
          }
        },
        outlined: {
          background: {
            normal: palette.primary.white,
            hover: palette.secondary.lightestGray,
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray
          },
          boxShadow: `0 0 0 1px ${palette.secondary.darkGray}`,
          color: {
            normal: palette.secondary.darkGray,
            hover: palette.secondary.darkGray,
            active: palette.secondary.darkGray,
            disabled: palette.secondary.darkGray
          }
        },
        text: {
          background: {
            normal: "inherit",
            hover: palette.secondary.lightestGray,
            active: palette.secondary.lightGreen,
            disabled: "transparent"
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.green,
            hover: palette.primary.green,
            active: palette.primary.green,
            disabled: palette.secondary.darkGray
          }
        }
      }
    },
    sukiIcon: {
      color: {
        error: palette.secondary.orange,
        inherit: "inherit",
        primary: palette.primary.green,
        secondary: palette.secondary.lightGray,
        warning: palette.secondary.orange
      },
      size: {
        sm: spacing(2.5),
        md: spacing(3),
        lg: spacing(4),
        xl: spacing(6)
      }
    },
    sukiListItem: {
      bottomBorder: palette.secondary.gray,
      simple: {
        background: {
          active: palette.secondary.offWhite,
          hover: palette.secondary.lightestGray
        },
        height: ["48px"]
      },
      color: {
        background: {
          active: palette.secondary.lightGreen,
          hover: palette.secondary.lightestGray
        },
        height: ["56px"]
      },
      small: {
        background: {
          active: palette.secondary.lightGreen,
          hover: palette.secondary.lightestGray
        },
        height: ["40px"]
      },
      title: {
        background: {
          active: "",
          hover: ""
        },
        height: ["32px"]
      }
    },
    sukiListItemTitle: {
      fontWeight: [400, 600],
      fontSize: ["16px"],
      padding: spacing(1),
      simple: {
        fontColor: palette.secondary.darkCharcoal,
        fontSize: ["16px"],
        height: ["24px"]
      },
      color: {
        fontColor: palette.primary.green,
        fontSize: ["14px"],
        height: ["18px"]
      },
      small: {
        fontColor: palette.primary.green,
        fontSize: ["14px"],
        height: ["18px"]
      },
      title: {
        fontColor: palette.primary.black50,
        fontSize: ["12px"],
        height: ["18px"]
      }
    },
    sukiListItemSubtitle: {
      simple: {
        fontColor: palette.secondary.blackGray,
        fontSize: ["14px"]
      },
      color: {
        fontColor: palette.secondary.blackGray,
        fontSize: ["12px"]
      },
      small: {
        fontColor: palette.primary.green,
        fontSize: ["12px"]
      },
      title: {
        fontColor: palette.primary.green,
        fontSize: ["12px"]
      }
    },
    termsCaption: {
      linkColor: palette.primary.green
    },
    text: {
      baseColor: palette.primary.black,
      black: palette.primary.black,
      green: palette.primary.green,
      white: palette.primary.white
    },
    textField: {
      background: {
        normal: palette.secondary.silver,
        hover: palette.secondary.lightestGray,
        active: palette.primary.white,
        disabled: palette.secondary.silver
      },
      border: {
        color: palette.secondary.lighterGray,
        errorColor: palette.secondary.orange
      },
      borderRadius: spacing(1),
      boxShadow: {
        normal: "none",
        hover: "none",
        active: `0 0 0 2px ${palette.secondary.lighterGray}`,
        disabled: "none",
        error: `0 0 0 2px ${palette.secondary.orange}`
      },
      color: {
        normal: palette.secondary.darkCharcoal,
        hover: palette.secondary.lightestGray,
        active: palette.primary.white,
        disabled: palette.secondary.silver
      },
      caretColor: palette.secondary.lightGray,
      font: {
        size: "16px",
        weight: 400
      },
      helperText: {
        color: {
          normal: "inherit",
          error: palette.secondary.orange
        }
      },
      placeholder: {
        normal: palette.secondary.lightGray,
        hover: palette.secondary.lightGray,
        disabled: palette.secondary.lighterGray
      }
    },
    themePicker: {
      thumbnail: {
        border: {
          color: {
            checked: palette.primary.green
          }
        }
      }
    },
    toast: {
      confirmation: {
        backgroundColor: palette.primary.green,
        color: palette.primary.white
      },
      error: {
        backgroundColor: palette.secondary.yellowOrange
      },
      info: {
        backgroundColor: palette.primary.white
      },
      secondaryConfirmation: {
        backgroundColor: palette.secondary.lightGreen
      },
      severe: {
        backgroundColor: palette.secondary.lightOrange
      },
      tip: {
        backgroundColor: palette.secondary.vividGreen
      }
    },
    tooltip: {
      background: palette.secondary.green
    },
    typography,
    unfinishedNotesBadge: {
      backgroundColor: palette.secondary.orange
    },
    videoPlayer: {
      closeButton: {
        backgroundColor: palette.primary.white,
        borderColor: palette.primary.white
      }
    },
    whatCanISay: {
      helpButtonColor: palette.secondary.darkGray,
      placeholderColor: palette.secondary.darkGray
    }
  },
  font: {
    family: "'Open Sans', sans-serif",
    weight: {
      bold: 700,
      regular: "normal",
      semiBold: 600
    }
  },
  pages: {
    help: {
      activeItemBackgroundColor: palette.secondary.lightGreen,
      backgroundColor: palette.secondary.offWhite,
      borderColor: palette.secondary.gray,
      hoveredItemBackgroundColor: palette.secondary.lightestGray,
      sectionBackgroundColor: palette.primary.white,
      statusColors: {
        lightGray: palette.secondary.lightGray,
        lightOrange: palette.secondary.lightOrange,
        orange: palette.secondary.orange,
        yellowGreen: palette.secondary.yellowGreen,
        yellowOrange: palette.secondary.yellowOrange
      }
    },
    home: {
      backgroundColor: palette.secondary.offWhite
    },
    login: {
      backgroundColor: palette.secondary.offWhite
    },
    note: {
      addProblemButton: {
        background: palette.primary.black5,
        color: palette.primary.green,
        disabled: palette.secondary.lightGray,
        focused: palette.primary.lightGreen
      },
      backgroundColor: palette.primary.white,
      borderColor: palette.secondary.gray,
      card: {
        arrowIcon: palette.primary.green,
        background: palette.primary.white,
        borderColor: palette.secondary.gray,
        buttonTextColor: palette.primary.green,
        color: palette.secondary.darkGray,
        emptyCard: {
          color: palette.secondary.lightGray
        },
        shadowColor: palette.primary.black20,
        vitals: {
          background: palette.primary.black3,
          border: palette.primary.black10
        }
      },
      controlMenu: {
        background: palette.primary.white,
        border: palette.secondary.gray
      },
      problemSection: {
        buttonBackground: "rgba(240, 244, 239, 0.75)",
        buttonBorder: palette.primary.black2,
        buttonOutline: "rgb(240, 244, 239)",
        buttonShadow: "rgb(221 221 221)",
        iconBackground: "rgba(118, 118, 128, 0.08)",
        outline: "rgba(2, 16, 17, 0.1)"
      },
      readOnlyTip: {
        background: palette.secondary.silver,
        tipShadow: palette.primary.black25
      },
      sections: {
        activeTextColor: palette.primary.black,
        dictationModeFocusEdgeColor: palette.secondary.lightBlue,
        disabledTextColor: palette.secondary.lightGray,
        focusBackgroundColor: palette.secondary.silver,
        focusEdgeColor: palette.secondary.lightGray,
        fontColor: palette.primary.black,
        footerColor: palette.secondary.spanishGray,
        hoverBackgroundColor: palette.secondary.veryLightGray,
        htmlSectionBackgroundColor: palette.secondary.offWhite,
        intermediateTextColor: palette.secondary.lightGray
      },
      showCardButton: {
        background: palette.primary.white,
        buttonFocused: palette.primary.lightGreen,
        buttonHovered: palette.secondary.lightestGray,
        buttonShadow: palette.primary.black10
      }
    },
    pageNotFound: {
      backgroundColor: palette.secondary.offWhite
    },
    password: {
      backgroundXS: palette.primary.green,
      contentBackground: palette.primary.white,
      contentBorderColor: palette.secondary.gray,
      footerColor: palette.secondary.lightGray,
      input: {
        borderColor: palette.primary.platinum,
        color: palette.secondary.lightGray,
        errorBorderColor: palette.secondary.orange
      }
    },
    patients: {
      activeColor: palette.primary.green,
      activeItemBackgroundColor: palette.primary.lightGreen,
      backgroundActiveColor: palette.primary.green,
      backgroundColor: palette.secondary.offWhite,
      border: palette.secondary.gray,
      hoveredItemBackgroundColor: palette.primary.black4,
      sectionBackgroundColor: palette.primary.white,
      tabs: {
        activeStateColor: palette.primary.white,
        defaultColor: palette.secondary.darkGray
      },
      weakBorder: palette.primary.platinum,
      zeroState: {
        textColor: palette.secondary.lightGray
      }
    },
    payments: {
      backgroundColor: palette.primary.green
    },
    registerSuccess: {
      background: palette.primary.green,
      color: palette.primary.white,
      footerColor: palette.secondary.lightGray,
      listItemNumber: {
        background: palette.secondary.lightGreen,
        color: palette.primary.green
      },
      login: {
        background: palette.secondary.offWhite
      }
    },
    settings: {
      backgroundActiveColor: palette.secondary.lightGreen,
      backgroundColor: palette.secondary.offWhite,
      backgroundHoveredColor: palette.secondary.lightestGray,
      borderColor: palette.secondary.gray,
      button: {
        color: {
          primary: palette.secondary.green
        }
      },
      emptyListTextColor: palette.secondary.lightGray,
      noteType: {
        color: palette.primary.black,
        inputTipColor: palette.primary.black50,
        platterBackgroundColor: palette.primary.black3,
        platterLabelColor: palette.primary.black85
      },
      placeholderColor: palette.secondary.lightGray,
      problemBasedLabel: {
        backgroundColor: palette.primary.gray3
      },
      sectionBackgroundColor: palette.primary.white,
      sectionBorderColor: palette.secondary.gray,
      sectionOptions: {
        backgroundColor: palette.primary.white,
        backgroundColorHover: palette.secondary.lightestGray,
        boxShadow: palette.primary.black20,
        color: {
          active: palette.primary.lightGreen,
          normal: palette.primary.green,
          problemBased: palette.secondary.darkCharcoal
        }
      }
    },
    signUp: {
      background: palette.primary.green,
      errorColor: palette.secondary.orange,
      fieldBorderColor: palette.secondary.lighterGray,
      formBackground: palette.primary.white,
      formBorderColor: palette.secondary.gray,
      input: {
        activeBackground: palette.primary.white,
        background: palette.primary.white,
        border: palette.secondary.lighterGray,
        hoverBackground: palette.secondary.lightestGray
      },
      linkColor: palette.primary.green,
      placeholderColor: palette.secondary.lightGray,
      registrationEmail: {
        backgroundColor: palette.primary.white,
        borderColor: palette.primary.platinum,
        secondaryTextColor: palette.secondary.darkGray
      },
      sukiLogoColor: palette.primary.white
    },
    windowsDownload: {
      backgroundColor: {
        bottomContainer: palette.secondary.offWhite,
        downloadButton: palette.primary.corn,
        hoveredDownloadButton: palette.secondary.lemonGinger,
        topContainer: palette.primary.casal
      }
    },
    unfinishedNotes: {
      backgroundColor: palette.secondary.offWhite,
      boxShadowColor: palette.primary.black20,
      borderColor: palette.secondary.gray,
      sectionBackgroundColor: palette.primary.white
    },
    xLiteSuccess: {
      background: palette.primary.green,
      color: palette.primary.white
    }
  },
  palette,
  spacing,
  themeId: "light"
};

const darkTheme: ThemeProvider = {
  breakpoints,
  common: {
    borderBottom: `box-shadow: inset 0 -1px 0 0 ${palette.primary.blackOlive1};`,
    borderTop: `box-shadow: inset 0 1px 0 0 ${palette.primary.blackOlive1};`,
    pageBackground: palette.primary.dark,
    pageColor: palette.primary.white
  },
  components: {
    appSkeleton: {
      background: palette.primary.dark,
      color: palette.primary.white
    },
    button: {
      backgroundColor: {
        active: palette.secondary.lightGreen,
        disabled: palette.secondary.lighterGray,
        hovered: palette.primary.black3,
        primary: palette.primary.green,
        secondary: "transparent"
      },
      borderColor: {
        dark: palette.primary.black,
        disabled: palette.primary.black20,
        normal: palette.primary.green
      },
      boxShadowColor: {
        primaryActive: palette.primary.black40,
        primaryNotDisabledHovered: palette.primary.black20
      },
      color: {
        primary: palette.primary.white,
        secondary: palette.primary.green
      },
      disabled: {
        color: {
          primary: palette.primary.white,
          secondary: palette.primary.black20
        }
      }
    },
    capturingIndicator: {
      background: palette.secondary.green
    },
    card: {
      background: palette.primary.eerieBlack,
      borderColor: palette.primary.platinum,
      color: palette.primary.white
    },
    checkbox: {
      backgroundColor: palette.primary.white,
      borderColor: palette.secondary.lighterGray,
      errorColor: palette.secondary.orange,
      hoveredBackgroundColor: palette.secondary.lightestGray
    },
    datePicker: {
      backgroundColor: {
        active: palette.primary.green,
        current: palette.primary.black10,
        primary: palette.primary.white,
        secondary: palette.primary.green
      },
      color: {
        active: palette.primary.white,
        dateControls: palette.secondary.blackGray,
        primary: palette.primary.black,
        secondary: palette.secondary.lighterGray
      }
    },
    dialog: {
      button: {
        backgroundColor: {
          focused: palette.primary.lightGreen,
          hovered: palette.secondary.lightestGray,
          primary: "transparent",
          secondary: palette.primary.black4
        },
        color: {
          primary: palette.primary.green,
          secondary: palette.primary.black50
        }
      },
      closeIconColor: palette.secondary.lightGray
    },
    emrConnectionToolbar: {
      backgroundColor: palette.secondary.lightOrange
    },
    fab: {
      background: {
        normal: palette.primary.blackOlive1,
        hover: palette.secondary.lightestGray,
        active: palette.primary.lightGreen,
        disabled: palette.primary.white
      },
      boxShadow: `0px 4px 5px ${palette.primary.black10}, 0px 1px 10px ${palette.primary.black10}, 0px 2px 4px ${palette.primary.black10}`,
      size: {
        sm: 40,
        md: 48
      }
    },
    formInput: {
      backgroundColor: {
        focused: palette.primary.white,
        hovered: palette.primary.black5,
        normal: palette.primary.black5
      },
      borderColor: {
        error: palette.secondary.orange,
        focused: palette.secondary.lighterGray
      },
      caretColor: {
        normal: palette.primary.green
      },
      color: {
        disabled: palette.primary.black35
      },
      shadowColor: {
        focused: palette.primary.black15,
        normal: palette.primary.black30
      }
    },
    gettingStarted: {
      backgroundColor: palette.primary.white,
      borderColor: palette.secondary.gray,
      closeButton: {
        background: palette.primary.white,
        backgroundActive: palette.primary.lightGreen,
        backgroundHover: palette.secondary.lightestGray,
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1)",
        color: palette.primary.green
      },
      textColor: palette.secondary.blackGray
    },
    header: {
      color: palette.primary.black
    },
    icon: {
      color: {
        black: palette.primary.black,
        blueGray: palette.secondary.blueGray,
        darkGray: palette.secondary.darkGray,
        green: palette.primary.green,
        lightGray: palette.secondary.lighterGray,
        lighterGray: palette.secondary.lighterGray,
        offWhite: palette.secondary.offWhite,
        orange: palette.secondary.orange,
        white: palette.primary.white
      }
    },
    iconButton: {
      background: {
        active: palette.primary.davysGray,
        disabled: "transparent",
        hover: palette.primary.davysGray,
        primary: "transparent"
      },
      color: {
        active: palette.primary.zomp,
        disabled: palette.primary.graniteGray,
        hover: palette.primary.zomp,
        primary: palette.secondary.spanishGray
      },
      sizes: {
        xs: 18,
        sm: 20,
        md: 24,
        lg: 32
      }
    },
    icd10Lookup: {
      background: palette.primary.black3,
      color: palette.secondary.darkCharcoal,
      header: {
        background: palette.primary.white,
        border: palette.secondary.lighterGray
      },
      hovered: palette.primary.black3,
      list: {
        active: palette.primary.lightGreen,
        background: palette.secondary.offWhite,
        boldColor: palette.secondary.darkCharcoal,
        border: palette.primary.black20,
        codeColor: palette.secondary.green,
        color: "rgb(41, 64, 79)",
        hovered: palette.secondary.lightestGray
      },
      moreResultsTextColor: palette.secondary.blackGray,
      poweredByTextColor: palette.secondary.darkGray,
      shadow: palette.primary.black20
    },
    initialsAvatar: {
      backgroundColor: palette.secondary.lighterGreen,
      color: palette.primary.black
    },
    insertScriptMenuListItem: {
      hoveredItemBackgroundColor: palette.secondary.lighterGreen,
      selectedBackgroundColor: palette.secondary.offWhite
    },
    kebabMenu: {
      backgroundColor: palette.primary.white,
      shadowColor: palette.primary.black20
    },
    link: {
      color: {
        hovered: palette.primary.green,
        normal: palette.primary.green,
        visited: palette.primary.green85
      }
    },
    linkButton: {
      color: {
        hover: palette.secondary.lightestGray,
        active: palette.secondary.lightGreen
      }
    },
    listPanel: {
      activeBackgroundColor: palette.secondary.offWhite,
      borderBottomColor: palette.secondary.gray,
      disabledColor: palette.primary.black35,
      hoveredBackgroundColor: palette.primary.black4
    },
    noteCell: {
      color: {
        subtitle: palette.secondary.blackGray,
        title: palette.secondary.darkCharcoal
      }
    },
    mainMenu: {
      backgroundColor: palette.primary.darker,
      separatorColor: palette.primary.black10
    },
    modal: {
      backgroundColor: {
        backdrop: palette.primary.black5,
        primary: palette.primary.black,
        secondary: palette.secondary.blue
      },
      borderColor: palette.secondary.lightGray,
      borderRadius: "8px",
      boxShadow:
        "0px 14px 19px 0 rgba(0, 0, 0, 0.12), 0px 8px 9px 0 rgba(0, 0, 0, 0.08), 0px 4px 5px 0 rgba(0, 0, 0, 0.06), 0px 1px 2px 0 rgba(0, 0, 0, 0.04)",
      closeIcon: {
        color: palette.secondary.lighterGray
      },
      color: palette.primary.white,
      maskColor: palette.primary.black90,
      signNote: {
        confirmCodes: {
          background: {
            active: palette.primary.lightGreen,
            hovered: palette.secondary.lightestGray
          },
          borderColor: palette.secondary.lightGray,
          epicWarningColor: palette.secondary.lightGray,
          icdCode: {
            background: palette.secondary.silver,
            color: palette.secondary.darkGray
          },
          secondaryTextColor: palette.secondary.blackGray
        },
        confirmSignButton: {
          activeColor: palette.secondary.green,
          hoverBorderColor: palette.primary.green,
          normalBorderColor: palette.secondary.vividGreen
        },
        secondaryButton: {
          background: palette.secondary.lightestGray,
          borderColor: palette.secondary.darkGray,
          color: palette.secondary.darkGray
        }
      }
    },
    modalFooter: {
      borderColor: palette.secondary.gray,
      color: palette.primary.green
    },
    multipleEncounters: {
      borderColor: palette.secondary.lighterGray,
      color: palette.secondary.darkGray
    },
    navigationHeaderIcon: {
      hoveredBackgroundColor: palette.primary.black10,
      hoveredColor: palette.primary.green,
      selectedBackgroundColor: palette.secondary.lightGreen
    },
    fabButton: {
      activeBackgroundColor: palette.secondary.lightGreen,
      backgroundColor: palette.primary.white,
      boxShadow: `0px 4px 5px ${palette.primary.black10}, 0px 1px 10px ${palette.primary.black10}, 0px 2px 4px ${palette.primary.black10}`,
      hoveredBackgroundColor: palette.secondary.lightestGray
    },
    noteMenu: {
      backgroundColor: palette.primary.white
    },
    noteMenuListItem: {
      activeItemBackgroundColor: palette.secondary.lightGreen,
      hoveredItemBackgroundColor: palette.primary.black5
    },
    noteSubmissionButton: {
      activeBackgroundColor: palette.secondary.lightGreen,
      backgroundColor: palette.primary.white,
      boxShadow: `0px 4px 5px ${palette.primary.black10}, 0px 1px 10px ${palette.primary.black10}, 0px 2px 4px ${palette.primary.black10}`,
      hoveredBackgroundColor: palette.secondary.lightestGray
    },
    noteTypes: {
      activeItemBackgroundColor: palette.secondary.offWhite,
      hoveredItemBackgroundColor: palette.secondary.lightestGray
    },
    pageHeader: {
      backgroundColor: palette.secondary.offWhite,
      border: palette.primary.black25,
      linkColor: palette.primary.green
    },
    patientCell: {
      color: palette.secondary.blackGray,
      disabledColor: palette.primary.black35,
      nameColor: palette.secondary.darkCharcoal
    },
    patientProfile: {
      border: palette.secondary.gray,
      button: {
        background: palette.primary.white,
        backgroundActive: palette.primary.lightGreen,
        backgroundHovered: palette.secondary.lightestGray,
        border: palette.secondary.darkGray,
        color: palette.secondary.darkGray
      },
      color: palette.secondary.lightGray,
      timeColor: palette.secondary.blackGray
    },
    patientSearch: {
      background: {
        normal: palette.secondary.outerSpace
      },
      borderColor: palette.secondary.lighterGray,
      boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.1)",
      clearBtnBorderColor: palette.secondary.gray,
      clearBtnTextColor: palette.secondary.lightGray,
      hoveredBackgroundColor: palette.secondary.gray,
      secondaryTextColor: palette.secondary.blackGray,
      selectedBackgroundColor: palette.secondary.lightGreen,
      textColor: palette.secondary.darkCharcoal
    },
    patientsListDropDown: {
      backgroundColor: palette.primary.white,
      boxShadow: `0px 1px 10px ${palette.primary.black20}, 0px 3px 4px ${palette.primary.black20}`,
      itemBorderColor: "rgba(94, 121, 142, 0.2)",
      itemClickBackgroundColor: palette.secondary.offWhite,
      itemFontColor: palette.secondary.darkCharcoal,
      itemHoverBackgroundColor: palette.secondary.lightestGray
    },
    patientsMenu: {
      backgroundColor: palette.primary.white,
      boxShadow: `0px 1px 10px ${palette.primary.black20}, 0px 3px 4px ${palette.primary.black10}`
    },
    progressBar: {
      completedColor: palette.primary.green85,
      pendingColor: palette.primary.platinum
    },
    ring: {
      color: palette.secondary.blue
    },
    scrollbar: {
      scrollTrack: palette.primary.white,
      thumbColor: palette.secondary.lighterGray,
      thumbHoveredColor: palette.secondary.darkGray
    },
    searchPatients: {
      color: palette.secondary.lightGray
    },
    select: {
      activeItemBackgroundColor: palette.secondary.offWhite,
      backgroundColor: palette.primary.white,
      borderColor: palette.secondary.lighterGray,
      color: palette.secondary.lightGray,
      errorColor: palette.secondary.orange,
      hoveredItemBackgroundColor: palette.secondary.lightestGray
    },
    stickyHeader: {
      background: palette.primary.darker
    },
    suggestion: {
      background: palette.secondary.offWhite,
      color: palette.secondary.green,
      insertButtonColor: palette.secondary.darkGray
    },
    suggestionsPanel: {
      background: palette.secondary.silver,
      boxShadow: palette.primary.black10,
      color: palette.secondary.darkGray,
      hovered: "rgba(240, 244, 239, 0.5)"
    },
    sukiButton: {
      sm: {
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "16px",
        height: "24px",
        minWidth: spacing(8),
        padding: `0 ${spacing(1)}`,
        iconPadding: `0 ${spacing(1)}`,
        buttonText: {
          background: {
            active: palette.secondary.gunmetal,
            disabled: "transparent",
            hover: palette.primary.davysGray,
            normal: "inherit"
          },
          boxShadow: "none",
          color: {
            active: palette.primary.zomp,
            disabled: palette.secondary.lighterGray,
            hover: palette.primary.zomp,
            normal: palette.primary.zomp
          }
        },
        contained: {
          background: {
            normal: palette.primary.green,
            hover: palette.secondary.green,
            active: palette.primary.lightGreen,
            disabled: palette.primary.graniteGray
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.white,
            hover: palette.primary.white,
            active: palette.secondary.green,
            disabled: palette.primary.white
          }
        },
        outlined: {
          background: {
            normal: palette.primary.white,
            hover: palette.secondary.lightestGray,
            active: palette.primary.lightGreen,
            disabled: palette.primary.white
          },
          boxShadow: `0 0 0 1px ${palette.secondary.lighterGray}`,
          color: {
            normal: palette.primary.green,
            hover: palette.primary.green,
            active: palette.primary.green,
            disabled: palette.secondary.lighterGray
          }
        },
        text: {
          background: {
            normal: "inherit",
            hover: palette.primary.davysGray,
            active: palette.secondary.gunmetal,
            disabled: "transparent"
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.zomp,
            hover: palette.primary.zomp,
            active: palette.primary.zomp,
            disabled: palette.secondary.lighterGray
          }
        }
      },
      md: {
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        height: "40px",
        minWidth: spacing(12),
        padding: `0 ${spacing(1)}`,
        iconPadding: `0 ${spacing(1)}`,
        buttonText: {
          background: {
            active: palette.secondary.gunmetal,
            disabled: "transparent",
            hover: palette.primary.davysGray,
            normal: "inherit"
          },
          boxShadow: "none",
          color: {
            active: palette.primary.zomp,
            disabled: palette.secondary.lighterGray,
            hover: palette.primary.zomp,
            normal: palette.primary.zomp
          }
        },
        contained: {
          background: {
            normal: palette.primary.green,
            hover: palette.secondary.green,
            active: palette.primary.lightGreen,
            disabled: palette.primary.graniteGray
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.white,
            hover: palette.primary.white,
            active: palette.secondary.green,
            disabled: palette.primary.white
          }
        },
        outlined: {
          background: {
            normal: palette.primary.white,
            hover: palette.secondary.lightestGray,
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray
          },
          boxShadow: `0 0 0 1px ${palette.secondary.darkGray}`,
          color: {
            normal: palette.primary.green,
            hover: palette.primary.green,
            active: palette.primary.green,
            disabled: palette.secondary.lighterGray
          }
        },
        text: {
          background: {
            normal: "inherit",
            hover: palette.primary.davysGray,
            active: palette.secondary.gunmetal,
            disabled: "transparent"
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.zomp,
            hover: palette.primary.zomp,
            active: palette.primary.zomp,
            disabled: palette.secondary.lighterGray
          }
        }
      },
      lg: {
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "24px",
        height: "56px",
        minWidth: spacing(27),
        padding: `0 ${spacing(10)}`,
        iconPadding: `0 ${spacing(4)} 0 ${spacing(4)}`,
        buttonText: {
          background: {
            active: palette.secondary.gunmetal,
            disabled: "transparent",
            hover: palette.primary.davysGray,
            normal: "inherit"
          },
          boxShadow: "none",
          color: {
            active: palette.primary.zomp,
            disabled: palette.secondary.lighterGray,
            hover: palette.primary.zomp,
            normal: palette.primary.zomp
          }
        },
        contained: {
          background: {
            normal: palette.primary.green,
            hover: palette.secondary.green,
            active: palette.primary.lightGreen,
            disabled: palette.primary.graniteGray
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.white,
            hover: palette.primary.white,
            active: palette.secondary.green,
            disabled: palette.secondary.spanishGray
          }
        },
        outlined: {
          background: {
            normal: palette.primary.white,
            hover: palette.secondary.lightestGray,
            active: palette.primary.lightGreen,
            disabled: palette.secondary.lighterGray
          },
          boxShadow: `0 0 0 1px ${palette.secondary.darkGray}`,
          color: {
            normal: palette.secondary.darkGray,
            hover: palette.secondary.darkGray,
            active: palette.secondary.darkGray,
            disabled: palette.secondary.darkGray
          }
        },
        text: {
          background: {
            normal: "inherit",
            hover: palette.primary.davysGray,
            active: palette.secondary.gunmetal,
            disabled: "transparent"
          },
          boxShadow: "none",
          color: {
            normal: palette.primary.zomp,
            hover: palette.primary.zomp,
            active: palette.primary.zomp,
            disabled: palette.secondary.lighterGray
          }
        }
      }
    },
    sukiIcon: {
      color: {
        error: palette.secondary.orange,
        inherit: "inherit",
        primary: palette.primary.green,
        secondary: palette.secondary.lightGray,
        warning: palette.secondary.orange
      },
      size: {
        sm: spacing(2.5),
        md: spacing(3),
        lg: spacing(4),
        xl: spacing(6)
      }
    },
    sukiListItem: {
      bottomBorder: palette.secondary.gray,
      simple: {
        background: {
          active: palette.secondary.gunmetal,
          hover: palette.primary.davysGray
        },
        height: ["48px"]
      },
      color: {
        background: {
          active: palette.secondary.gunmetal,
          hover: palette.primary.davysGray
        },
        height: ["56px"]
      },
      small: {
        background: {
          active: palette.secondary.gunmetal,
          hover: palette.primary.davysGray
        },
        height: ["44px"]
      },
      title: {
        background: {
          active: "",
          hover: ""
        },
        height: ["44px"]
      }
    },
    sukiListItemTitle: {
      fontWeight: [400, 600],
      fontSize: ["16px"],
      padding: spacing(1),
      simple: {
        fontColor: palette.primary.white,
        fontSize: ["16px"],
        height: ["24px"]
      },
      color: {
        fontColor: palette.primary.zomp,
        fontSize: ["14px"],
        height: ["18px"]
      },
      small: {
        fontColor: palette.primary.white,
        fontSize: ["14px"],
        height: ["18px"]
      },
      title: {
        fontColor: palette.primary.white,
        fontSize: ["12px"],
        height: ["18px"]
      }
    },
    sukiListItemSubtitle: {
      simple: {
        fontColor: palette.primary.platinum,
        fontSize: ["14px"]
      },
      color: {
        fontColor: palette.secondary.gray,
        fontSize: ["12px"]
      },
      small: {
        fontColor: palette.primary.platinum,
        fontSize: ["12px"]
      },
      title: {
        fontColor: palette.primary.green,
        fontSize: ["12px"]
      }
    },
    termsCaption: {
      linkColor: palette.primary.green
    },
    text: {
      baseColor: palette.primary.black,
      black: palette.primary.black,
      green: palette.primary.green,
      white: palette.primary.white
    },
    textField: {
      background: {
        normal: palette.secondary.outerSpace,
        hover: palette.secondary.blackGray,
        active: palette.secondary.outerSpace,
        disabled: palette.secondary.outerSpace
      },
      border: {
        color: palette.secondary.lighterGray,
        errorColor: palette.secondary.orange
      },
      borderRadius: spacing(1),
      boxShadow: {
        normal: "",
        hover: "",
        active: `0 0 0 2px ${palette.primary.graniteGray}`,
        disabled: "",
        error: `0 0 0 2px ${palette.secondary.orange}`
      },
      color: {
        normal: palette.primary.white,
        hover: palette.primary.white,
        active: palette.primary.white,
        disabled: palette.secondary.silver
      },
      caretColor: palette.secondary.lightGray,
      font: {
        size: "16px",
        weight: 400
      },
      helperText: {
        color: {
          normal: "inherit",
          error: palette.secondary.orange
        }
      },
      placeholder: {
        normal: palette.secondary.lightGray,
        hover: palette.secondary.lightGray,
        disabled: palette.secondary.lighterGray
      }
    },
    themePicker: {
      thumbnail: {
        border: {
          color: {
            checked: palette.primary.green
          }
        }
      }
    },
    toast: {
      confirmation: {
        backgroundColor: palette.primary.green,
        color: palette.primary.white
      },
      error: {
        backgroundColor: palette.secondary.lightOrange
      },
      info: {
        backgroundColor: palette.primary.white
      },
      secondaryConfirmation: {
        backgroundColor: palette.secondary.lightGreen
      },
      severe: {
        backgroundColor: palette.secondary.yellowOrange
      },
      tip: {
        backgroundColor: palette.secondary.vividGreen
      }
    },
    tooltip: {
      background: palette.secondary.green
    },
    typography,
    unfinishedNotesBadge: {
      backgroundColor: palette.secondary.orange
    },
    videoPlayer: {
      closeButton: {
        backgroundColor: palette.primary.white,
        borderColor: palette.primary.white
      }
    },
    whatCanISay: {
      helpButtonColor: palette.secondary.darkGray,
      placeholderColor: palette.secondary.darkGray
    }
  },
  font: {
    family: "'Open Sans', sans-serif",
    weight: {
      bold: 700,
      regular: "normal",
      semiBold: 600
    }
  },
  pages: {
    help: {
      activeItemBackgroundColor: palette.secondary.lightGreen,
      backgroundColor: palette.secondary.offWhite,
      borderColor: palette.secondary.gray,
      hoveredItemBackgroundColor: palette.secondary.lightestGray,
      sectionBackgroundColor: palette.primary.white,
      statusColors: {
        lightGray: palette.secondary.lightGray,
        lightOrange: palette.secondary.lightOrange,
        orange: palette.secondary.orange,
        yellowGreen: palette.secondary.yellowGreen,
        yellowOrange: palette.secondary.yellowOrange
      }
    },
    home: {
      backgroundColor: palette.primary.dark
    },
    login: {
      backgroundColor: palette.secondary.offWhite
    },
    note: {
      addProblemButton: {
        background: palette.primary.black5,
        color: palette.primary.green,
        disabled: palette.secondary.lightGray,
        focused: palette.primary.lightGreen
      },
      backgroundColor: palette.primary.white,
      borderColor: palette.secondary.gray,
      card: {
        arrowIcon: palette.primary.green,
        background: palette.primary.white,
        borderColor: palette.secondary.gray,
        buttonTextColor: palette.primary.green,
        color: palette.secondary.darkGray,
        emptyCard: {
          color: palette.secondary.lightGray
        },
        shadowColor: palette.primary.black20,
        vitals: {
          background: palette.primary.black3,
          border: palette.primary.black10
        }
      },
      controlMenu: {
        background: palette.primary.white,
        border: palette.secondary.gray
      },
      problemSection: {
        buttonBorder: palette.primary.black2,
        buttonOutline: "rgb(240, 244, 239)",
        buttonShadow: "rgb(221 221 221)",
        buttonBackground: "rgba(240, 244, 239, 0.75)",
        iconBackground: "rgba(118, 118, 128, 0.08)",
        outline: "rgba(2, 16, 17, 0.1)"
      },
      readOnlyTip: {
        background: palette.secondary.silver,
        tipShadow: palette.primary.black25
      },
      sections: {
        activeTextColor: palette.primary.black,
        dictationModeFocusEdgeColor: palette.secondary.lightBlue,
        disabledTextColor: palette.secondary.lightGray,
        focusBackgroundColor: palette.secondary.silver,
        focusEdgeColor: palette.secondary.lightGray,
        fontColor: palette.primary.black,
        footerColor: palette.secondary.spanishGray,
        hoverBackgroundColor: palette.secondary.veryLightGray,
        htmlSectionBackgroundColor: palette.secondary.offWhite,
        intermediateTextColor: palette.secondary.lightGray
      },
      showCardButton: {
        background: palette.primary.white,
        buttonFocused: palette.primary.lightGreen,
        buttonHovered: palette.secondary.lightestGray,
        buttonShadow: palette.primary.black10
      }
    },
    pageNotFound: {
      backgroundColor: palette.secondary.offWhite
    },
    password: {
      backgroundXS: palette.primary.green,
      contentBackground: palette.primary.white,
      contentBorderColor: palette.secondary.gray,
      footerColor: palette.secondary.lightGray,
      input: {
        borderColor: palette.primary.platinum,
        color: palette.secondary.lightGray,
        errorBorderColor: palette.secondary.orange
      }
    },
    patients: {
      activeColor: palette.primary.green,
      activeItemBackgroundColor: palette.primary.lightGreen,
      backgroundActiveColor: palette.primary.green,
      backgroundColor: palette.secondary.offWhite,
      border: palette.primary.black25,
      hoveredItemBackgroundColor: palette.primary.black4,
      sectionBackgroundColor: palette.primary.white,
      tabs: {
        activeStateColor: palette.primary.white,
        defaultColor: palette.secondary.darkGray
      },
      weakBorder: palette.primary.platinum,
      zeroState: {
        textColor: palette.secondary.lightGray
      }
    },
    payments: {
      backgroundColor: palette.primary.green
    },
    registerSuccess: {
      background: palette.primary.green,
      color: palette.primary.white,
      footerColor: palette.secondary.lightGray,
      listItemNumber: {
        background: palette.secondary.lightGreen,
        color: palette.primary.green
      },
      login: {
        background: palette.secondary.offWhite
      }
    },
    settings: {
      backgroundActiveColor: palette.secondary.lightGreen,
      backgroundColor: palette.secondary.offWhite,
      backgroundHoveredColor: palette.secondary.lightestGray,
      borderColor: palette.secondary.gray,
      button: {
        color: {
          primary: palette.secondary.green
        }
      },
      emptyListTextColor: palette.secondary.lightGray,
      noteType: {
        platterBackgroundColor: palette.primary.black3,
        platterLabelColor: palette.primary.white,
        inputTipColor: palette.primary.white,
        color: palette.primary.white
      },
      placeholderColor: palette.secondary.lightGray,
      problemBasedLabel: {
        backgroundColor: palette.primary.gray3
      },
      sectionBackgroundColor: palette.primary.white,
      sectionBorderColor: palette.secondary.gray,
      sectionOptions: {
        backgroundColor: palette.primary.white,
        backgroundColorHover: palette.primary.black4,
        boxShadow: palette.primary.black20,
        color: {
          active: palette.primary.lightGreen,
          normal: palette.primary.green,
          problemBased: palette.secondary.darkCharcoal
        }
      }
    },
    signUp: {
      background: palette.primary.green,
      errorColor: palette.secondary.orange,
      fieldBorderColor: palette.secondary.lighterGray,
      formBackground: palette.primary.white,
      formBorderColor: palette.secondary.gray,
      input: {
        activeBackground: palette.secondary.gray,
        background: palette.secondary.gray,
        border: palette.secondary.lighterGray,
        hoverBackground: palette.secondary.lightestGray
      },
      linkColor: palette.primary.green,
      placeholderColor: palette.secondary.lightGray,
      registrationEmail: {
        backgroundColor: palette.primary.white,
        borderColor: palette.primary.platinum,
        secondaryTextColor: palette.secondary.darkGray
      },
      sukiLogoColor: palette.primary.white
    },
    windowsDownload: {
      backgroundColor: {
        bottomContainer: palette.secondary.offWhite,
        downloadButton: palette.primary.corn,
        hoveredDownloadButton: palette.secondary.lemonGinger,
        topContainer: palette.primary.casal
      }
    },
    unfinishedNotes: {
      backgroundColor: palette.secondary.offWhite,
      boxShadowColor: palette.primary.black20,
      borderColor: palette.secondary.gray,
      sectionBackgroundColor: palette.primary.white
    },
    xLiteSuccess: {
      background: palette.primary.green,
      color: palette.primary.white
    }
  },
  palette,
  spacing,
  themeId: "dark"
};

export { BreakpointKeysType, darkTheme, lightTheme, palette, ThemeProvider };
