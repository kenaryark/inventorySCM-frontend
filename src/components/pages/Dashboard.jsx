import { Box, Card, SimpleGrid, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TableInventorySD from "../Dashboard/tableInventorySD";
import {
  columnsDataMG,
  columnsDataProyek,
  columnsDataSD,
  dataMG,
} from "../Dashboard/variables/ColumnData";
import ChartMonthDivisi from "../Dashboard/chartMonthDivisi";
import TableInventoryProyek from "../Dashboard/tableInventoryProyek";
import Statistics from "../Dashboard/statistics";
import TableInventoryMG from "../Dashboard/tableInventoryMG";

export const Dashboard = () => {
  const [perSumberDaya, setPerSumberDaya] = useState([]);
  const [perProyek, setPerProyek] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [totalMaterial, setTotalMaterial] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/TopPerSumberDaya")
      .then((response) => response.json())
      .then((data) => {
        setPerSumberDaya(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    fetch("http://localhost:5000/api/TopPerProyek")
      .then((response) => response.json())
      .then((data) => {
        setPerProyek(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    fetch("http://localhost:5000/api/TotalValue")
      .then((response) => response.json())
      .then((data) => {
        setTotalValue(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    fetch("http://localhost:5000/api/TotalMaterial")
      .then((response) => response.json())
      .then((data) => {
        setTotalMaterial(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {/* <Flex bg="#EBF4FA"> */}
      <Box
        mx="auto"
        p={{ base: "20px", md: "30px" }}
        pe="20px"
        minH="100vh"
        pt="50px">
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2, "2xl": 2 }}
          gap="20px"
          mb="20px">
          <Card
            p="20px"
            display="flex"
            flexDirection="column"
            width="100%"
            position="relative"
            borderRadius="20px"
            minWidth="0px"
            // wordWrap="break-word"
            bg="#ffffff"
            backgroundClip="border-box"
            overflow="auto">
            <Statistics
              name="Total Inventory Value"
              value={totalValue.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            />
          </Card>
          <Card
            p="20px"
            display="flex"
            flexDirection="column"
            width="100%"
            position="relative"
            borderRadius="20px"
            minWidth="0px"
            // wordWrap="break-word"
            bg="#ffffff"
            backgroundClip="border-box"
            overflow="auto">
            <Statistics
              name="Jenis Material"
              value={totalMaterial.toLocaleString("id-ID")}
            />
          </Card>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
          <Card
            p="20px"
            display="flex"
            flexDirection="column"
            width="100%"
            position="relative"
            borderRadius="20px"
            minWidth="0px"
            // wordWrap="break-word"
            bg="#ffffff"
            backgroundClip="border-box"
            overflow="auto">
            <TableInventoryProyek
              columnsData={columnsDataProyek}
              tableData={perProyek}
            />
          </Card>
          <Card
            p="20px"
            // display="flex"
            // flexDirection="column"
            width="100%"
            // position="relative"
            borderRadius="20px"
            minWidth="0px"
            // wordWrap="break-word"
            bg="#ffffff"
            backgroundClip="border-box">
            <ChartMonthDivisi />
          </Card>
        </SimpleGrid>
        <SimpleGrid gap="20px" mb="20px">
          <Card
            p="20px"
            display="flex"
            flexDirection="column"
            width="100%"
            position="relative"
            borderRadius="20px"
            minWidth="0px"
            // wordWrap="break-word"
            bg="#ffffff"
            backgroundClip="border-box"
            overflow="auto">
            <TableInventoryMG columnsData={columnsDataMG} tableData={dataMG} />
          </Card>
        </SimpleGrid>
        <SimpleGrid gap="20px" mb="20px">
          <Card
            p="20px"
            display="flex"
            flexDirection="column"
            width="100%"
            position="relative"
            borderRadius="20px"
            minWidth="0px"
            // wordWrap="break-word"
            bg="#ffffff"
            backgroundClip="border-box"
            overflow="auto">
            <TableInventorySD
              columnsData={columnsDataSD}
              tableData={perSumberDaya}
            />
          </Card>
        </SimpleGrid>
      </Box>
      {/* </Flex> */}
    </>
  );
};
