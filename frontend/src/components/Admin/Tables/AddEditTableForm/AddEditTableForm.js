import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTable } from "../../../../hooks";
import "./AddEditTableForm.scss";
import Swal from "sweetalert2";

export function AddEditTableForm(props) {
  const { onClose, onRefetch, table } = props;
  const { addTable, updateTable } = useTable();

  const formik = useFormik({
    initialValues: initialValues(table),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      if (table) await updateTable(table.id, formValue);
      else await addTable(formValue);
      onRefetch();
      onClose();
      Swal.fire("Buen trabajo!", "Se guardaron los cambios", "success");
    },
  });
  return (
    <Form className="add-edit-table form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="number"
        type="number"
        placeholder="Número de mesa"
        value={formik.values.number}
        onChange={formik.handleChange}
        error={formik.errors.number}
      />
      <Button
        type="submit"
        primary
        fluid
        content={table ? "Actualizar" : "Registrar"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    number: data?.number || "",
  };
}

function validationSchema() {
  return {
    number: Yup.number().required(true),
  };
}
