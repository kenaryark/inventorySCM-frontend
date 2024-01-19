import { Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useMemo, useState, useEffect } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { Message } from "primereact/message";
import { Dropdown } from "primereact/dropdown";
import { columnsDataMG } from "./variables/ColumnData";

export default function TableInventoryMG(props) {
  const columnsData = columnsDataMG;
  const [tableData, setTableData] = useState([]);
  const [selectedMaterialGroup, setSelectedMaterialGroup] = useState(null);
  const [materialOptions, setMaterialOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMaterialOptions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/materialGroup");
      const data = await response.json();

      // Extract unique material options from the fetched data
      if (Array.isArray(data)) {
        // Extract unique material options from the fetched data
        const uniqueMaterialOptions = Array.from(
          new Set(data.map((item) => item.kodeMaterialGrup))
        ).map((name) => ({ name }));

        setMaterialOptions(uniqueMaterialOptions);
        setLoading(false);
      } else {
        console.error("Invalid response format:", data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching material options:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch material options when the component mounts
    fetchMaterialOptions();
  }, []);

  const fetchData = async (selectedMaterialGroup) => {
    // Replace this with your actual data fetching logic
    const url = `http://localhost:5000/api/TopPerSumberDaya/${selectedMaterialGroup.name}`;
    // console.log("Fetching data from URL:", url);

    const response = await fetch(url);
    const data = await response.json();
    // console.log("Fetched data:", data);

    return data;
  };

  useEffect(() => {
    if (!selectedMaterialGroup) {
      setTableData([]); // Clear table data
    }
  }, [selectedMaterialGroup]);

  useEffect(() => {
    // Fetch data when selectedMaterialGroup changes
    fetchData(selectedMaterialGroup).then((data) => {
      // console.log("Data received:", data);
      setTableData(data);
    });
  }, [selectedMaterialGroup]);

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  return (
    <Flex direction="column">
      <Flex px="25px" justify="space-between" mb="10px" align="center">
        <Text
          color="#212529"
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%">
          Top 10 Inventory Per Material Group
        </Text>
      </Flex>
      {tableData.length > 0 ? (
        <Table
          {...getTableProps()}
          variant="striped"
          color="gray.500"
          mb="24px">
          <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    pe="10px"
                    key={index}
                    borderColor="gray.200"
                    width={column.width}>
                    <Flex
                      justify="space-between"
                      align="center"
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color="black">
                      {column.render("Header")}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "NAMA MATERIAL") {
                      data = (
                        <Flex>
                          <Text
                            color="#212529"
                            fontSize="sm"
                            fontWeight="500"
                            paddingRight="5">
                            {cell.value}
                          </Text>
                        </Flex>
                      );
                    } else if (cell.column.Header === "UOM") {
                      data = (
                        <Flex>
                          <Text color="#212529" fontSize="sm" fontWeight="500">
                            {cell.value}
                          </Text>
                        </Flex>
                      );
                    } else if (cell.column.Header === "QUANTITY") {
                      data = (
                        <Text
                          color="#212529"
                          fontSize="sm"
                          fontWeight="500"
                          justifyContent="right">
                          {cell.value.toLocaleString("id-ID")}
                        </Text>
                      );
                    } else if (cell.column.Header === "VALUE") {
                      data = (
                        <Text color="#212529" fontSize="sm" fontWeight="500">
                          {cell.value.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </Text>
                      );
                    }
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: "14px" }}
                        maxH="30px !important"
                        py="8px"
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor="transparent">
                        {data}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      ) : (
        <Flex align="center" justify="center" h="100%">
          <Message
            severity="warn"
            text="Pilih Filter Material Group terlebih dahulu"
          />
        </Flex>
      )}
    </Flex>
  );
}
