"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function MealDetailsInterceptingModal() {
  const router = useRouter();
  const params = useParams();
  const { id: mealId } = params;

  const handleClose = () => {
    // Navigate back to the restaurant page
    router.back();
  };

  // This would typically come from an API call
  const meal = {
    id: mealId,
    name: "Garlic Bread",
    description: "Freshly baked bread with garlic butter",
    price: 5.99,
    image: "/placeholder.svg",
    category: "starters",
    popular: true,
  };

  return (
    <Dialog defaultOpen onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{meal.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="relative w-full h-[300px]">
            <Image
              src={meal.image}
              alt={meal.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">{meal.description}</p>
            <p className="font-medium">
              ${meal.price} - ${mealId}
            </p>
          </div>
        </div>
        <DialogClose asChild>
          <Button variant="outline" className="w-full">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
