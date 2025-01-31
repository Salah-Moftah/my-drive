import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdArrowUp } from "react-icons/io";
import { fileList } from "../constants";
import HoverCircleBackground from "./HoverCircleBackground";

const ContentTable = () => {
  return (
    <div className="table-container">
      <table className="drive-table">
        <thead>
          <tr>
            <th className="name-col">
              <span className="header-name">Name</span>
              <HoverCircleBackground>
                <IoMdArrowUp />
              </HoverCircleBackground>
            </th>
            <th className="owner-col hide-on-small">Owner</th>
            <th className="date-col hide-on-medium">Last Modified</th>
            <th className="size-col hide-on-large">File Size</th>
            <th className="size-col hide-on-large">
            <div className="sorting">
              <HoverCircleBackground>
                <BiDotsVerticalRounded />
              </HoverCircleBackground>
            </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {fileList.map((file, index) => (
            <tr key={index}>
              <td className="name-col">
                <img src="/imgs/pdf.png" alt="name" className="name-img" />
                {file.name}
              </td>
              <td className="owner-col hide-on-small">
                <div className="owner-box">
                  <img
                    className="owner-img"
                    src="/imgs/avatar.png"
                    alt="avatar"
                  />
                  {file.owner}
                </div>
              </td>
              <td className="date-col hide-on-medium">{file.date}</td>
              <td className="size-col hide-on-large">{file.size}</td>
              <td className="size-col hide-on-large">
                <div className="sorting">
                  <HoverCircleBackground>
                    <BiDotsVerticalRounded />
                  </HoverCircleBackground>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
