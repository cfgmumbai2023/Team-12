import React from "react";
import { Stack, MenuItem, Select } from "@material-ui/core";

import { categories } from "./utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <div
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    <Select
      value={selectedCategory}
      onChange={(event) => setSelectedCategory(event.target.value)}
      sx={{
        background: selectedCategory && "#FC1503",
        color: "white",
        minWidth: 200,
        borderRadius: 4,
      }}
    >
      {categories.map((category) => (
        <MenuItem
          value={category.name}
          key={category.name}
          sx={{
            color: category.name === selectedCategory ? "red" : "red",
            opacity: category.name === selectedCategory ? 1 : 0.8,
          }}
        >
          <span style={{ color: category.name === selectedCategory ? "red" : "red", marginRight: "15px" }}>
            {category.icon}
          </span>
          <span>{category.name}</span>
        </MenuItem>
      ))}
    </Select>
    
  </div>
);

export default Categories;