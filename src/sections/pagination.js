import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
export const PaginationComponent = () => {
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              isActive={true}
              className="rounded-full border-white bg-[var(--primary)] text-[var(--card)] hover:bg-[var(--primary)] hover:text-[var(--card)]"
              href="#"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">20</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <h6 className="text-xs text-[var(--foreground)] text-center my-5 ">
        Showing results 1-30 of 1,415
      </h6>
    </>
  );
};
