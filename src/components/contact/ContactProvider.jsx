import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form from "./form.jsx";

const queryClient = new QueryClient();

export default function ContactProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>
  );
}
