import { CustomerDto } from '../models/DataSource1/customer-dto';
import { OrderDto } from '../models/DataSource1/order-dto';
import { OrderDetailDto } from '../models/DataSource1/order-detail-dto';
import { EmployeeDto } from '../models/DataSource1/employee-dto';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

export async function getCustomerDtoList(): Promise<CustomerDto[]> {
	const response = await fetch(`${API_ENDPOINT}/Customers`);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function getOrderDtoList(id: string): Promise<OrderDto[]> {
	if (!id) {
		return Promise.resolve([]);
	}
	const response = await fetch(`${API_ENDPOINT}/Customers/${id}/Orders`);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function getOrderDetailDtoList(id: number): Promise<OrderDetailDto[]> {
	if (!id) {
		return Promise.resolve([]);
	}
	const response = await fetch(`${API_ENDPOINT}/Orders/${id}/Details`);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function getEmployeeDtoList(): Promise<EmployeeDto[]> {
	const response = await fetch(`${API_ENDPOINT}/Employees`);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function putCustomerDto(data: any): Promise<CustomerDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		'Content-Type': 'application/json; charset=utf-8'
	};
	const options = {
		method: 'PUT',
		body,
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function deleteCustomerDto(id: string): Promise<CustomerDto | undefined> {
	if (!id) {
		return Promise.resolve(undefined);
	}
	let headers;
	const options = {
		method: 'DELETE',
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers/${id}`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function postCustomerDto(data: any): Promise<CustomerDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		'Content-Type': 'application/json; charset=utf-8'
	};
	const options = {
		method: 'POST',
		body,
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}
