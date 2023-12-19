import { ChangeEvent, FC, FormEvent, memo, useState } from "react";

interface FormProps {
  income?: { id: any; name: string; note: string; amount: number; type: "INCOME" | "EXPENSE"; };
  closeModal: () => void;
}

interface IncomeDataProps {
  id?: any;
  name: string;
  note: string;
  amount: string | number;
  type: "INCOME" | "EXPENSE";
}

const FormComponent: FC<FormProps> = ({ income, closeModal }) => {
  const [data, setData] = useState<IncomeDataProps | undefined>({
    name: income?.name || "",
    note: income?.note || "",
    amount: income?.amount || "",
    type: income?.type || "INCOME"
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (income?.id) {
    } else {
    }
    closeModal();
  };

  return (
    <div>
      <div className="pb-4">
        <h3 className="font-bold text-2xl text-gray-700">Income Form</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Name</label>
          <div>
            <input
              className="w-full rounded-md border border-gray-300 p-2"
              value={data?.name}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setData((data: any) => {
                  return {
                    ...data,
                    name: event.target.value,
                  };
                })
              }
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-gray-500 text-sm">Amount</label>
          <div>
            <input
              className="w-full rounded-md border border-gray-300 p-2"
              value={data?.amount}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setData((data: any) => {
                  return {
                    ...data,
                    amount: event.target.value,
                  };
                })
              }
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-500" htmlFor="">
            Note
          </label>
          <div>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2"
              rows={4}
              value={data?.note}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setData((data: any) => {
                  return {
                    ...data,
                    note: event.target.value,
                  };
                })
              }
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex space-x-2 h-10">
            <button
              className="border border-gray-300 px-3 rounded-lg"
              onClick={() => closeModal()}
              type="button"
            >
              Cancel
            </button>
            <button className="bg-gray-800 rounded-lg text-white px-6">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const FormTransaction = memo(FormComponent);

export default FormTransaction;
