import React from "react";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { any, z } from "zod";
import { formSchema } from "@/lib/utils";

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: any;
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
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CustomInput;
