import { useState, useMemo, useCallback } from "react";

const items = [
  "Apples",
  "Bananas",
  "Strawberries",
  "Blueberries",
  "Mangoes",
  "Pineapple",
  "Lettuce",
  "Broccoli",
  "Paper Towels",
  "Dish Soap",
];

export const ShoppingList = () => {
  const [query, setQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const toggleItem = useCallback(
    (item) => {
      setSelectedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    },
    [setSelectedItems]
  );

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f5f6f7",
      width: "90%",
      margin: "20px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.5",
      color: "#1b1b32",
    },
    title: {
      color: "#1b1b32",
      marginBottom: "20px",
      textAlign: "center",
    },
    form: {
      textAlign: "center",
      width: "100%",
    },
    label: {
      display: "block",
      marginBottom: "10px",
      fontWeight: "500",
    },
    searchInput: {
      color: "white",
      marginLeft: "5px",
      padding: "8px 12px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      width: "70%",
      maxWidth: "300px",
      fontSize: "14px",
    },
    description: {
      fontSize: "14px",
      color: "#666",
      margin: "10px 0 20px 0",
    },
    list: {
      listStyleType: "none",
      padding: "0",
      width: "100%",
      maxWidth: "350px",
      margin: "20px auto 0 auto",
    },
    listItem: {
      textAlign: "left",
      margin: "10px 0",
      padding: "12px 16px",
      borderBottom: "1px solid #eee",
      display: "flex",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: "4px",
    },
    checkedListItem: {
      textAlign: "left",
      margin: "10px 0",
      padding: "12px 16px",
      borderBottom: "1px solid #eee",
      display: "flex",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: "4px",
      fontWeight: "bold",
      textDecoration: "line-through",
      color: "#f89808",
    },
    checkbox: {
      marginRight: "12px",
      width: "18px",
      height: "18px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopping List</h1>
      <form style={styles.form}>
        <label htmlFor="search" style={styles.label}>
          Search for an item:
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          aria-describedby="search-description"
          style={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p id="search-description" style={styles.description}>
          Type to filter the list below:
        </p>
        <ul style={styles.list}>
          {filteredItems.map((item) => {
            const isChecked = selectedItems.includes(item);
            return (
              <li
                key={item}
                style={isChecked ? styles.checkedListItem : styles.listItem}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <input
                    type="checkbox"
                    style={styles.checkbox}
                    onChange={() => toggleItem(item)}
                    checked={isChecked}
                    aria-label={`Select ${item}`}
                  />
                  {item}
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};
