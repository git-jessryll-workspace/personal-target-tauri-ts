import { FC } from "react";
import { formatFileSize, getFileExtension } from "@/utils";

interface DocumentPageProps {}
const DocumentPage: FC<DocumentPageProps> = () => {
  return (
    <div>
      <div className="border-b bg-gray-800 text-white px-4 py-8 sm:px-6 rounded-lg p-0.5 shadow-lg">
        <div className="flex flex-wrap justify-between sm:flex-nowrap items-center">
          <div className="ml-1 space-y-2">
            <h3 className="text-4xl font-bold leading-6 ">Documents</h3>
          </div>
          <div className="mt-2 space-y-2 flex-shrink-0 justify-center text-right">
            <button
              type="button"
              className="relative inline-flex items-center rounded-md text-gray-800 p-2.5 text-sm font-semibold bg-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add new file
            </button>
          </div>
        </div>
      </div>
      <div className=" pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {files.map((file: any) => (
          <div
            key={file.filename}
            className="border border-gray-500 p-3 rounded-md shadow-sm text-gray-800 hover:bg-gray-200 cursor-pointer"
          >
            <div className="flex justify-between">
              <div className="relative">
                <h5 className="text-sm font-semibold">{file.filename}</h5>
                <span className="uppercase text-xs pt-5 font-bold">
                  {getFileExtension(file.mime_type)}
                </span>
              </div>
              <div className="text-xs w-auto relative">
                {new Date().toDateString()}
                <p className="text-xs absolute bottom-0 right-0 font-bold">
                  {formatFileSize(file.size)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentPage;

const files: any[] = [
  {
    filename: "document1.txt",
    size: 1000,
    mime_type: "text/plain",
  },
  {
    filename: "document2.docx",
    size: 2500,
    mime_type:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  {
    filename: "document3.pdf",
    size: 5000,
    mime_type: "application/pdf",
  },
  {
    filename: "document4.jpg",
    size: 1500,
    mime_type: "image/jpeg",
  },
  {
    filename: "document5.xlsx",
    size: 3000,
    mime_type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  {
    filename: "document6.pptx",
    size: 2000,
    mime_type:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  },
  {
    filename: "document7.png",
    size: 1200,
    mime_type: "image/png",
  },
  {
    filename: "document8.doc",
    size: 1800,
    mime_type: "application/msword",
  },
  {
    filename: "document9.txt",
    size: 900,
    mime_type: "text/plain",
  },
  {
    filename: "document10.pdf",
    size: 4000,
    mime_type: "application/pdf",
  },
  {
    filename: "document11.jpg",
    size: 1300,
    mime_type: "image/jpeg",
  },
  {
    filename: "document12.xlsx",
    size: 2800,
    mime_type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  {
    filename: "document13.pptx",
    size: 2200,
    mime_type:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  },
  {
    filename: "document14.png",
    size: 1100,
    mime_type: "image/png",
  },
  {
    filename: "document15.doc",
    size: 1700,
    mime_type: "application/msword",
  },
  {
    filename: "document16.txt",
    size: 800,
    mime_type: "text/plain",
  },
  {
    filename: "document17.pdf",
    size: 4500,
    mime_type: "application/pdf",
  },
  {
    filename: "document18.jpg",
    size: 1600,
    mime_type: "image/jpeg",
  },
  {
    filename: "document19.xlsx",
    size: 3200,
    mime_type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  {
    filename: "document20.pptx",
    size: 2400,
    mime_type:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  },
  {
    filename: "document21.png",
    size: 1000,
    mime_type: "image/png",
  },
  {
    filename: "document22.doc",
    size: 1900,
    mime_type: "application/msword",
  },
  {
    filename: "document23.txt",
    size: 700,
    mime_type: "text/plain",
  },
  {
    filename: "document24.pdf",
    size: 4800,
    mime_type: "application/pdf",
  },
  {
    filename: "document25.jpg",
    size: 1700,
    mime_type: "image/jpeg",
  },
  {
    filename: "document26.xlsx",
    size: 3400,
    mime_type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  {
    filename: "document27.pptx",
    size: 2600,
    mime_type:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  },
  {
    filename: "document28.png",
    size: 900,
    mime_type: "image/png",
  },
  {
    filename: "document29.doc",
    size: 2000,
    mime_type: "application/msword",
  },
  {
    filename: "document30.txt",
    size: 600,
    mime_type: "text/plain",
  },
];
