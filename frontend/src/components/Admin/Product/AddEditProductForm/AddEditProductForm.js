import React, { useState, useEffect } from "react";
import {
  Form,
  /* Image */ Button,
  Dropdown,
  Checkbox,
} from "semantic-ui-react";
import { map } from "lodash";
import { useCategory } from "../../../../hooks";
import "./AddEditProductForm.scss";

export function AddEditProductForm() {
  const [categoriesFormat, setCategoriesFormat] = useState([]);
  const { categories, getCategories } = useCategory();

  useEffect(() => getCategories(), // eslint-disable-next-line 
  []); 
  useEffect(() => {
    setCategoriesFormat(formatDropdownData(categories));
  }, [categories]);

  return (
    <Form className="add-edit-product-form">
      <Form.Input name="title" placeholder="Nombre del producto" />
      <Form.Input type="number" name="price" placeholder="Precio" />
      <Dropdown
        placeholder="Categoría"
        fluid
        selection
        search
        options={categoriesFormat}
      />
      <div className="add-edit-product-form__active">
        <Checkbox toggle />
        Producto Activo
      </div>
      <Button type="button" fluid content="Subir imagen" />
      <Button type="submit" primary fluid content="Crear" />
    </Form>
  );
}

function formatDropdownData(data) {
  return map(data, (item) => ({
    key: item.id,
    text: item.title,
    value: item.id,
  }));
}
