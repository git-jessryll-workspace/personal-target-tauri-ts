function classNames(...classes: (string | undefined | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}
const dateFormat = (date: string) => {
  const option: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", option);
};

const amountFormat = (amount: number) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const sumList = (list: any[], key: string, startNumber: number = 0) => {
  return list.reduce((accumulator, current) => {
    return accumulator + +current[key];
  }, startNumber);
};

const statuses: any = {
  INCOME:
    "text-green-700 bg-green-50 ring-green-600/20 text-[10px] p-1 w-[60px] flex justify-center",
  "In progress":
    "text-gray-600 bg-gray-50 ring-gray-500/10 text-[10px] p-1 w-[60px] flex justify-center",
  EXPENSE:
    "text-yellow-800 bg-yellow-50 ring-yellow-600/20 text-[10px] p-1 w-[60px] flex justify-center",
};

const paidStatuses: any = {
  COMPLETED: "text-green-700 bg-green-50 ring-green-600/20",
  PENDING: "text-gray-600 bg-gray-50 ring-gray-500/10",
};
function formatFileSize(bytes: number): string {
  const sizes: string[] = ["Bytes", "KB", "MB", "GB", "TB"];

  if (bytes === 0) return "0 Byte";

  const i: number = Math.floor(Math.log(bytes) / Math.log(1024));
  return (
    (Math.round(100 * (bytes / Math.pow(1024, i))) / 100).toFixed(2) +
    " " +
    sizes[i]
  );
}

function getFileExtension(mimeType: string): string | null {
  const mimeToExtension: Record<string, string | null> = {
    "application/pdf": "pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      "docx",
    "application/msword": "doc",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "application/vnd.ms-excel": "xls",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      "pptx",
    "application/vnd.ms-powerpoint": "ppt",
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/gif": "gif",
    "text/plain": "txt",
    // Add more MIME types and their corresponding extensions as needed
  };

  // Convert the MIME type to lowercase for case-insensitive comparison
  const lowerCaseMimeType = mimeType.toLowerCase();

  return mimeToExtension[lowerCaseMimeType] || null;
}

export {
  classNames,
  dateFormat,
  amountFormat,
  sumList,
  statuses,
  paidStatuses,
  formatFileSize,
  getFileExtension,
};
