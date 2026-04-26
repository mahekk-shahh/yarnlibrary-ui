import ListingYarn from "./ListingYarn";
import ListingCompany from "./ListingCompany";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Listing = () => {
  return (
    <Tabs defaultValue="yarns">
      <TabsList>
        <TabsTrigger value="yarns">Yarns</TabsTrigger>
        <TabsTrigger value="companies">Companies</TabsTrigger>
      </TabsList>
      <TabsContent value="yarns">
        <ListingYarn />
      </TabsContent>
      <TabsContent value="companies">
        <ListingCompany />
      </TabsContent>
    </Tabs>
  );
};

export default Listing;
