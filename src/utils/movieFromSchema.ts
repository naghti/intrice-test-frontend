import { z } from "zod";

export const movieSchema = z.object({
  title: z.string().min(1, 'Название обязательно'),
  genre: z.string().min(1, 'Жанр обязателен'),
  release_year: z.string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: 'Год должен быть числом' }) 
    .refine((val) => val >= 1888, { message: 'Год должен быть после 1888' }) 
    .refine((val) => val <= new Date().getFullYear(), { message: 'Год не может быть в будущем' }), 
  director: z.string().min(1, 'Режиссер обязателен'),
  actors: z.string().min(1, 'Актеры обязательны'),
  annotation: z.string(),
});