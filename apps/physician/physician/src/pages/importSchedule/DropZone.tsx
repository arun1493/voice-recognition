import _get from "lodash/get";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import { Icon, Text } from "@suki-web/suki-ui";
import { useNavigate } from "react-router-dom";
import { Paths } from "@suki-web/suki-business";
import { FunctionComponent, useCallback, useState } from "react";

import { getErrorMessageType } from "./helpers";
import { toastsActions } from "../../redux/toast";
import { ScheduleImportErrors } from "./constants";
import { uploadFile } from "../../api/importSchedule";
import { StyledDropZone } from "./importSchedule.styled";
import { ACCEPTED_SCHEDULED_IMPORT_FILE_FORMATS, TOAST_TYPES } from "../../constants";

const DropZone: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onDrop = useCallback(async (acceptedFiles, errors) => {
    if (errors.length) {
      setErrorMessage(ScheduleImportErrors.EXTENSION);
      return;
    }
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await uploadFile({ file: acceptedFiles[0] });

      const jobMessage = _get(response, "data.payload.message");

      dispatch(
        toastsActions.add({
          message: jobMessage,
          type: TOAST_TYPES.CONFIRMATION
        })
      );
      navigate(Paths.Schedule);
    } catch (error) {
      const errorCode = _get(error, "response.data.code");
      const errorMessage = _get(error, "response.data.details");
      const errorMessageType = getErrorMessageType(errorMessage);
      setErrorMessage(errorCode === 3 ? errorMessageType : ScheduleImportErrors.SERVER_ERROR);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: ACCEPTED_SCHEDULED_IMPORT_FILE_FORMATS
  });

  const getDropZoneContent = () => {
    if (isDragActive && !isDragReject) {
      return (
        <>
          <Icon icon="upload" size="lg" />
          <Text color="darkGray" marginTop="8px">
            {t("pages.importSchedule.dropZone.dndCsv")}
          </Text>
        </>
      );
    }
    if (isLoading && !isDragReject) {
      return (
        <>
          <Icon icon="loader" size="2xl" />
          <Text color="darkGray">{t("pages.importSchedule.dropZone.loading")}</Text>
        </>
      );
    }
    if (isDragReject) {
      return (
        <>
          <Text color="darkGray">{t(`pages.importSchedule.dropZone.errors.extension.line1`)}</Text>
          <Text color="darkGray">{t(`pages.importSchedule.dropZone.errors.extension.line2`)}</Text>
        </>
      );
    }
    if (errorMessage) {
      return (
        <>
          <Text color="darkGray">{t(`pages.importSchedule.dropZone.errors.${errorMessage}.line1`)}</Text>
          <Text color="darkGray">{t(`pages.importSchedule.dropZone.errors.${errorMessage}.line2`)}</Text>
        </>
      );
    }
    return (
      <>
        <Icon icon="upload" size="lg" />
        <Text color="darkGray" marginTop="8px">
          {t("pages.importSchedule.dropZone.dndCsv")}
        </Text>
        <Text color="darkGray">{t("pages.importSchedule.dropZone.orClickHere")}</Text>
      </>
    );
  };

  return (
    <StyledDropZone
      {...getRootProps({ isFocused, isDragAccept, isDragReject, hasErrors: !!errorMessage, isDragActive })}
    >
      <input accept=".csv" {...getInputProps()} />
      {getDropZoneContent()}
    </StyledDropZone>
  );
};

export default DropZone;

export { DropZone };
