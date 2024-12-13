import React from "react";

const ProjectName = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 10,
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          height: 22,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 16,
          display: "flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            color: "black",
            fontSize: 18,
            fontFamily: "Pretendard",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          프로젝트 제목이 들어갑니다.
        </div>
      </div>
    </div>
  );
};

export default ProjectName;