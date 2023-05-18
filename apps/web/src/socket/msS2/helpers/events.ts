const convertToSubSectionInfo = (problemSectionIds: string[]) => {
  const problemSectionObj = [];
  problemSectionIds?.forEach((problemSectionId: string) => {
    const problemSectionArr = problemSectionId.split(":");
    if (problemSectionArr?.length === 2) {
      const pbcSectionId = problemSectionArr[0];
      const pbcSectionName = problemSectionArr[1];
      problemSectionObj.push({
        section_id: pbcSectionId,
        name: pbcSectionName
      });
    }
  });
  return problemSectionObj;
};

export { convertToSubSectionInfo };
