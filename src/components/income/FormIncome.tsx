import { FC, FormEvent } from "react";


interface FormProps {
    id?: string;
}

const FormIncome: FC<FormProps> = ({id}) => {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    }
    return <div>
        <div className="pb-4">
            <h3 className="font-bold text-2xl text-gray-700">Income Form</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <label className="text-sm text-gray-500">Name</label>
                <div>
                    <input className="w-full rounded-md border border-gray-300 p-2"/>
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-gray-500 text-sm">Amount</label>
                <div>
                    <input className="w-full rounded-md border border-gray-300 p-2"/>
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-500" htmlFor="">Note</label>
                <div>
                    <textarea className="w-full border border-gray-300" rows={4}/>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="flex space-x-2 h-10">
                    <button className="border border-gray-300 px-3 rounded-lg">Cancel</button>
                    <button className="bg-gray-800 rounded-lg text-white px-6">Save</button>
                </div>
            </div>
        </form>
    </div>
}

export default FormIncome;