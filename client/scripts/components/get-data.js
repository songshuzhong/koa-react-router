import { getDataSource } from '../utilities/dataSource';

const dataToState = ( self ) => {
  
  if ( self.props.dataSource ) {
    
    const dataSource = self.props.dataSource;
    
    const saveDataSource = ( dataSource ) => {
      
      const data = dataSource ? dataSource : [];
  
      self.setState( { data: data } );
    };
    
    getDataSource( dataSource, saveDataSource );
    
  }
};

export default dataToState;
