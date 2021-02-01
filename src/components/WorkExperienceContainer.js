import { useEffect } from "react";
import WorkExperience from "./WorkExperience";
import readXlsxFile from "read-excel-file";

const WorkExperienceContainer = () => {
  useEffect(() => {
    readXlsxFile(
      "/Users/hemanthnhs/Documents/Projects/hemanthnhs.github.io/src/assets/data/Book1.xlsx"
    )
      .then((rows) => {
        console.log(rows);
        // `rows` is an array of rows
        // each row being an array of cells.
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  let work_exps = [];
  return (
    <div>
      {work_exps.map((work_exp) => (
        <WorkExperience work={work_exp} />
      ))}
    </div>
  );
};

export default WorkExperienceContainer;
