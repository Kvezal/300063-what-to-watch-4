interface IBreadcrumb {
  name: string;
  href?: string;
}

interface IBreadcrumbsProps {
  list: IBreadcrumb[];
}

export {
  IBreadcrumb,
  IBreadcrumbsProps,
};
