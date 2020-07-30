export interface IBreadcrumb {
  name: string;
  href?: string;
}

export interface IBreadcrumbsProps {
  list: IBreadcrumb[];
}
