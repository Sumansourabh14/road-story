"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";

const CarsGridPagination = ({ cars }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 6;

  const totalCars = cars.length;
  const noOfPages = Math.ceil(totalCars / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="p-6">
      <Pagination>
        <PaginationContent>
          {currentPage >= 1 && (
            <PaginationItem>
              <Button
                type="button"
                onClick={goToPreviousPage}
                variant="outline"
              >
                Previous
              </Button>
            </PaginationItem>
          )}
          {[...Array(noOfPages).keys()].map((page, index) => (
            <PaginationItem key={index}>
              <Button
                type="button"
                onClick={() => handlePageChange(page)}
                variant={currentPage === page ? "default" : "outline"}
              >
                {page}
              </Button>
            </PaginationItem>
          ))}
          {currentPage <= noOfPages - 2 && (
            <PaginationItem>
              <Button type="button" onClick={goToNextPage} variant="outline">
                Next
              </Button>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {cars.slice(start, end).map((car) => (
          <Card key={car._id} className="rounded-xl shadow-md overflow-hidden">
            <img
              src={car.img.url}
              alt={car.model}
              className="w-full h-48 object-cover"
            />

            <CardContent className="p-4">
              <h3 className="text-lg font-medium">
                {car.brand} {car.model}
              </h3>
              <p className="text-gray-600">{car.price.ex_showroom}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          {currentPage >= 1 && (
            <PaginationItem>
              <Button
                type="button"
                onClick={goToPreviousPage}
                variant="outline"
              >
                Previous
              </Button>
            </PaginationItem>
          )}
          {[...Array(noOfPages).keys()].map((page, index) => (
            <PaginationItem key={index}>
              <Button
                type="button"
                onClick={() => handlePageChange(page)}
                variant={currentPage === page ? "default" : "outline"}
              >
                {page}
              </Button>
            </PaginationItem>
          ))}
          {currentPage <= noOfPages - 2 && (
            <PaginationItem>
              <Button type="button" onClick={goToNextPage} variant="outline">
                Next
              </Button>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CarsGridPagination;
