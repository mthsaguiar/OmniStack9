import { createAppContainer, createSwitchNavigator} from 'react-navigation' 

import Login from './Pages/Login'
import List from './Pages/List'
import Books from './Pages/Books'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Books
    })
)

export default Routes;