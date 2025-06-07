import { MealCard } from "@/components/meal/MealCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { notFound } from "next/navigation";

interface RestaurantPageProps {
  params: {
    slug: string;
  };
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const categories = [
    { id: "starters", name: "Starters" },
    { id: "mains", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" },
  ];

  const menuMeals = [
    {
      id: 1,
      name: "Garlic Bread",
      description: "Freshly baked bread with garlic butter",
      price: 5.99,
      image: "/placeholder.svg",
      category: "starters",
      popular: true,
    },
    {
      id: 2,
      name: "Bruschetta",
      description: "Toasted bread topped with tomatoes, garlic, and basil",
      price: 6.99,
      image: "/placeholder.svg",
      category: "starters",
    },
  ];

  return (
    <div className="container py-4 space-y-6 mx-auto">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Menu</h2>

        <p className="text-muted-foreground">
          Adiciona refeições ao carrinho 👩‍🍳
        </p>
      </div>

      <Tabs defaultValue="starters" className="w-full">
        <TabsList className="w-full justify-start overflow-auto py-1 h-auto">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="whitespace-nowrap"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-4">
            <div className="grid gap-4">
              {menuMeals
                .filter((meal) => meal.category === category.id)
                .map((meal) => (
                  <Link
                    key={meal.id}
                    href={`/restaurant/${slug}/meal/${meal.id}`}
                  >
                    <MealCard meal={meal} />
                  </Link>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
