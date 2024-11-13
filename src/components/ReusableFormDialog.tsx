// ReusableFormDialog.tsx
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormField {
  name: string;
  label: string;
  type: string;//"text" | "email" | "textarea" | "select";
  placeholder?: string;
  validation?: ZodType<any>;
  options?: string[]; // Dropdown options if the type is "select"
}

interface ReusableFormDialogProps {
  title: string;
  fields: FormField[];
  onSubmit: (data: any) => void;
}

const ReusableFormDialog: React.FC<ReusableFormDialogProps> = ({ title, fields, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const schema = z.object(
    fields.reduce((acc, field) => {
      acc[field.name] = field.validation || z.string().nonempty(`${field.label} is required`);
      return acc;
    }, {} as Record<string, ZodType<any>>)
  );

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    handleClose();
  };

  return (
    <div className="mt-12 bottom-4 right-4 bg-white">
      
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full max-w-2xl space-y-4 mt-4">
  {fields.map((field) => (
    <div key={field.name} className="w-full">
      <label className="block text-sm font-medium text-gray-700">{field.label}</label>
      {field.type === "select" && field.options ? (
        <select
          {...register(field.name)}
          className="mt-1 block w-full px-3 py-2 text-textcolor border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buttoncolor focus:border-buttoncolor sm:text-sm"
        >
          <option value="">Select {field.label}</option>
          {field.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          {...register(field.name)}
          placeholder={field.placeholder}
          className="mt-1 block w-full text-textcolor px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buttoncolor focus:border-buttoncolor sm:text-sm"
        />
      )}
      {errors[field.name] && (
        <p className="text-red-500 text-xs mt-1">{String(errors[field.name]?.message)}</p>
      )}
    </div>
  ))}
  <div className="flex justify-end">
    <Button type="submit" className="bg-buttoncolor text-white py-2 px-4 rounded-lg">
      Submit
    </Button>
  </div>
</form>

    
    </div>
  );
};

export default ReusableFormDialog;
