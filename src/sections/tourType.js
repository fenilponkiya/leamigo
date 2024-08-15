import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { divider } from "@/utils/data";
import React from "react";
import { TourTypeForm } from "./tourTypeForm";

export const TourTypeFilter = () => {
  return (
    <Card>
      <CardHeader className="bg-[var(--primary)] rounded-t-lg text-sm pb-8">
        <CardTitle className="text-sm text-[var(--card)] pb-3">
          When are you travelling?
        </CardTitle>
        <CardDescription>
          <Button className="bg-[var(--card)] w-full hover:bg-[var(--card)]">
            July05 ~ Aug14
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TourTypeForm />
      </CardContent>
      <CardFooter className="flex flex-col">
        {divider.map(({ name }, index) => {
          return (
            <React.Fragment key={index}>
              <Separator className="my-4 bg-[var(--border)]" />
              <Label className="d-flex justify-start w-full">{name}</Label>
            </React.Fragment>
          );
        })}
      </CardFooter>
    </Card>
  );
};
