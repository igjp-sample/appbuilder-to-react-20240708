import { useCallback, useEffect, useState } from 'react';
import { CustomerDto } from '../models/DataSource1/customer-dto';
import { OrderDto } from '../models/DataSource1/order-dto';
import { OrderDetailDto } from '../models/DataSource1/order-detail-dto';
import { EmployeeDto } from '../models/DataSource1/employee-dto';
import { getCustomerDtoList, getEmployeeDtoList, getOrderDetailDtoList, getOrderDtoList } from '../services/data-source1';

export const useGetCustomerDtoList = () => {
	const [customerDto, setCustomerDto] = useState<CustomerDto[]>([]);

	const requestCustomerDto = useCallback(() => {
		let ignore = false;
		getCustomerDtoList()
			.then((data) => {
				if (!ignore) {
					setCustomerDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestCustomerDto();
	}, [requestCustomerDto]);

	return { requestDataSource1CustomerDto: requestCustomerDto, dataSource1CustomerDto: customerDto, setDataSource1CustomerDto: setCustomerDto};
}

export const useGetOrderDtoList = (id: string) => {
	const [orderDto, setOrderDto] = useState<OrderDto[]>([]);

	const requestOrderDto = useCallback(() => {
		let ignore = false;
		getOrderDtoList(id)
			.then((data) => {
				if (!ignore) {
					setOrderDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, [id]);

	useEffect(() => {
		requestOrderDto();
	}, [id, requestOrderDto]);

	return { requestDataSource1OrderDto: requestOrderDto, dataSource1OrderDto: orderDto, setDataSource1OrderDto: setOrderDto};
}

export const useGetOrderDetailDtoList = (id: any) => {
	const [orderDetailDto, setOrderDetailDto] = useState<OrderDetailDto[]>([]);

	const requestOrderDetailDto = useCallback(() => {
		let ignore = false;
		getOrderDetailDtoList(id)
			.then((data) => {
				if (!ignore) {
					setOrderDetailDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, [id]);

	useEffect(() => {
		requestOrderDetailDto();
	}, [id, requestOrderDetailDto]);

	return { requestDataSource1OrderDetailDto: requestOrderDetailDto, dataSource1OrderDetailDto: orderDetailDto, setDataSource1OrderDetailDto: setOrderDetailDto};
}

export const useGetEmployeeDtoList = () => {
	const [employeeDto, setEmployeeDto] = useState<EmployeeDto[]>([]);

	const requestEmployeeDto = useCallback(() => {
		let ignore = false;
		getEmployeeDtoList()
			.then((data) => {
				if (!ignore) {
					setEmployeeDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestEmployeeDto();
	}, [requestEmployeeDto]);

	return { requestDataSource1EmployeeDto: requestEmployeeDto, dataSource1EmployeeDto: employeeDto, setDataSource1EmployeeDto: setEmployeeDto};
}
