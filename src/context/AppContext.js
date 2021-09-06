import React,{useReducer} from "react";
import { getTablesMockData} from "utils/mockData";
import AppReducer from './AppReducer'
/**
 * Context to manage app state
 * Can be replaced with Redux Store
 */
const initialState = {
 // tableData:[],
  activeTable:'',
};

export const AppContext = React.createContext(initialState);

/**
 * Context Provider to wrap component with AppContext
 * giving access to context Data
 */
export const AppContextProvider = ({ children }) => {
  
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // async function setTableData(tableName){
  //   try{
  //     const res = getActiveTableData(tableName);
  //     dispatch({
  //       type: 'SET_ACTIVE_TABLE',
  //       payload: res
  //     })
  //   }catch(err){
  //     dispatch({
  //       type: 'ERROR',
  //       payload: err
  //     })
  //   }
  // }

  async function setTableName(tableName){
    try{
      dispatch({
        type: 'SET_ACTIVE_TABLE_NAME',
        payload: tableName
      })
    }catch(err){
      dispatch({
        type: 'ERROR',
        payload: err
      })
    }
  }

  return (
    <AppContext.Provider
      value={{
       // tableData: state.tableData,
        activeTable: state.activeTable,
        tablesData: getTablesMockData(),
        // setTableData,
        setTableName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
