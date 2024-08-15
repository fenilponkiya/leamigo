import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export const CommentForm = () => {
  return (
    <div className="mb-12">
      <p className="font-bold my-6 text-2xl ">Leave a Reply</p>
      <span className="text-xs">
        Your email address will not be published. Required fields are marked *
      </span>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-5mb-4 my-6">
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <span className="text-xs mb-6">Location</span>
          <span className="text-xs">Room</span>
        </div>
        <div className="col-span-1 md:col-span-1">
          {" "}
          <div className="col-span-1 md:col-span-1 flex flex-col">
            <span className="text-xs mb-6">Amenities</span>
            <span className="text-xs">Price</span>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1">
          {" "}
          <div className="col-span-1 md:col-span-1 flex flex-col">
            <span className="text-xs mb-6">Food</span>
            <span className="text-xs">Tour Operator</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="grid grid-cols-1">
          <Input
            placeholder="Name"
            className="h-10 w-full rounded-md border py-2 border-[var(--border)] text-xs"
          />
        </div>
        <div className="grid grid-cols-1">
          <Input
            placeholder="Email"
            className="h-10 w-full rounded-md border py-2 border-[var(--border)] text-xs"
          />
        </div>
      </div>
      <Input
        placeholder="Title"
        className="h-10 w-full rounded-md border py-2 border-[var(--border)] text-xs mb-6"
      />
      <Textarea
        className="border-[var(--border)] text-xs mb-6"
        placeholder="Comment"
      />
      <Button className="bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--background)] hover:text-[var(--primary)] border hover:border-[var(--primary)] mt-4 md:mt-0 text-xs">
        Post Commnet{" "}
      </Button>
    </div>
  );
};
