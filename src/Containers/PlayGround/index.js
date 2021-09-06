import { useCallback, useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import EmptyState from "Components/EmptyState";
import QueryEditor from "Components/QueryEditor";
import QueryResultTable from "Components/QueryResultTable";
import useAppContext from "hooks/useAppContext";
import DnsIcon from "@material-ui/icons/Dns";
import { DEFAULT_STRINGS } from "utils/constants/common";
import {Typography} from '@material-ui/core';
import StorageIcon from '@material-ui/icons/Storage';

/**
 * Playground for SQL
 * Wrapper Container
 * we can have Other Feature Components added to this
 * */
const Playground = () => {
  const { tablesData, activeTable } = useAppContext();

  const [queryResults, setQueryResults] = useState();
  const [tableResult, setTableResult] = useState();

  /**
   * handles running the query selected by user and returns data for the query
   * and updating store/context if required */
  const handleOnQueryRun = useCallback(() => {
    // returns random table data for all queries
    const tableNames = Object.keys(tablesData);
    const tableName = tableNames[(tableNames.length * Math.random()) << 0];
    setQueryResults(tablesData[tableName]);
    }, [tablesData]);

  useEffect(() => {
      setTableResult(tablesData[activeTable]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[tablesData,activeTable])


  return (
    <Box display="flex" height="150%" width="100%" flexDirection="column">
       <Box display="flex" height="100%" width="100%" flexDirection="column">
         <Typography component="h2" variant="h5" style={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent:"start", columnGap:"10px", padding:"15px"}}>
      <StorageIcon/> 
      <div>DATASET of {activeTable}</div>
    </Typography> 
    {!tableResult ? (
        <EmptyState
          title={DEFAULT_STRINGS.WELCOME_MESSAGE_DATABASE}
        />
      ) : (
        <QueryResultTable tableData={tableResult} />
      )}


      </Box>

      <QueryEditor onRunQuery={handleOnQueryRun} />
      {!queryResults ? (
        <EmptyState
          icon={<DnsIcon fontSize="large" />}
          title={DEFAULT_STRINGS.WELCOME_MESSAGE_TITLE}
          subtitle={DEFAULT_STRINGS.WELCOME_MESSAGE_SUBTITLE}
        />
      ) : (
        <QueryResultTable tableData={queryResults} />
      )}
      
    </Box>
  );
};

export default Playground;
