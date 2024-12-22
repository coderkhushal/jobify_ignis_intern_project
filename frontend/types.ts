import { IconType } from "react-icons"

export  type RoutesType = {
    name: string
    href : string
    icon: IconType
}
export type JobType = {
    id: string;
    title: string;
    posted_date: string;  // ISO 8601 date string (e.g., "2024-12-01T10:00:00Z")
    details_page_url: string;
    company_page_url: string;
    company_logo_url?: string | null;
    company_logo_url_optimized?: string | null;
    salary?: string | null;
    client_brand_id: string;
    company_name: string;
    employment_type: string;
    summary?: string | null;
    job_id: string;
    score?: number | null;
    easy_apply: boolean;
    willing_to_sponsor: boolean;
    employer_type: string;
    work_from_home_availability: boolean;
    is_remote: boolean;
    modified_date: string;  // ISO 8601 date string (e.g., "2024-12-01T12:00:00Z")
    guid: string;
    workplace_types?: string[] | null;
};
export type FilterType = {
    title?: string;
    min_salary?: string;
    max_salary?: string;
    workplace_type?: string;
    page?: number;

};
