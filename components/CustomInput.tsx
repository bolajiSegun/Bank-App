import React from "react";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { any, z } from "zod";
import { authFormSchema } from "@/lib/utils";


const formSchema = authFormSchema("sign-up")

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  type: string;
  label: string;
}


const CustomInput = ({
  control,
  name,
  placeholder,
  type,
  label,
}: CustomInput) => {
  return (
    <div>
      {" "}
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  type={type}
                  placeholder={placeholder}
                  className="input-class"
                  {...field}
                />
              </FormControl>
              <FormMessage className="form-message mt-2 text-red-600" />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CustomInput;
