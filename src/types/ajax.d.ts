import { IDictionary } from './types';
import { IViewBased } from './view';

export declare const XDomainRequest: any;

export type DataVariant = | IDictionary<string>
	| null
	| FormData
	| string
	| IDictionary<string | IDictionary<any>>;

export interface IRequest {
	url: string;
	method: string;
	data: DataVariant;
}

export interface IAjax {
	status: number;

	response: string;

	options: AjaxOptions;

	jodit: IViewBased;

	abort(): IAjax;

	send(): Promise<any>;

	prepareRequest(): IRequest;
}

export interface AjaxOptions {
	dataType?: string;
	method?: string;

	url?: string;

	data: DataVariant;


	contentType?: string | false;

	headers?: IDictionary<string> | null;

	withCredentials?: boolean;

	queryBuild?: (
		this: IAjax,
		obj: string | IDictionary<string | object> | FormData,
		prefix?: string
	) => string | FormData;

	xhr?: () => XMLHttpRequest;
}
