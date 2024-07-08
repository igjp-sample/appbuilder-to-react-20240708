import { createContext, Dispatch, useContext, useEffect, useRef, useState } from 'react';
import { CustomerDto } from '../models/DataSource1/customer-dto';
import { OrderDto } from '../models/DataSource1/order-dto';

export const GlobalContext = createContext<{globalState: GlobalStateInterface, setGlobalState: Dispatch<React.SetStateAction<GlobalStateInterface>>}>(undefined as any);
export const useGlobalContext = () => useContext(GlobalContext);

export const useGlobalState = () => {
	const __loaded = useRef<boolean>(false);
	const initialState = {
		selectCustomer: undefined,
		selectOrder: undefined
	} as GlobalStateInterface;
	const [globalState, setGlobalState] = useState<GlobalStateInterface>(initialState);

	useEffect(() => {
		if (__loaded.current) {
			setGlobalState(prevState => ({...prevState, selectOrder: undefined}));
		}
	}, [globalState.selectCustomer]);

	useEffect(() => {
		__loaded.current = true;
		return () => {
			__loaded.current = false;
		}
	}, []);

	return { globalState, setGlobalState };
};

interface GlobalStateInterface {
	selectCustomer: CustomerDto | undefined;
	selectOrder: OrderDto | undefined;
}
