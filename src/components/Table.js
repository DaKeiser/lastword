import { useTable, useSortBy } from "react-table";

import {
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  TableContainer,Box
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { IconButton } from '@chakra-ui/react'
import { DeleteIcon, EditIcon, InfoIcon} from '@chakra-ui/icons'

function CustomTable({ columns, data }) {
    function handleEditClick(todo){
     // we've set the passed todo to modal value
        console.log("editttt",todo)
    }
    function handleInfoClick(todo){
        // we've set the passed todo to modal value
           console.log("infooooooooo",todo)
       }
    function handleDeleteClick(todo){
        // we've set the passed todo to modal value
           console.log("dellll",todo)
    }
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows;

  return (
    <Box overflowY="auto" maxHeight="400px">

    <TableContainer>
      <Table  variant="striped" {...getTableProps()}>
        <Thead >
          {headerGroups.map((headerGroup) => (
            <Tr position="sticky" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <Th
                  userSelect="none"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <Flex alignItems="center">
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ChevronDownIcon ml={1} w={4} h={4} />
                      ) : (
                        <ChevronUpIcon ml={1} w={4} h={4} />
                      )
                    ) : (
                      ""
                    )}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
            <>
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <>
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>

                    </>

                  );
                })}
            <Td  >  
                <InfoIcon mr="5" onClick={()=>handleInfoClick(row)}/>
                <EditIcon mr="5" onClick={()=>handleEditClick(row)} />    
                <DeleteIcon color="red.500" mr="2" onClick={()=>handleDeleteClick(row.id)}/>

             </Td>
                </Tr>

          </>
            );
          })}
        </Tbody>
      </Table>
      <br />
    </TableContainer>
    </Box>
  );
}
export default CustomTable;