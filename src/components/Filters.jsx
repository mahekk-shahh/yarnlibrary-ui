import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Filters = ({ form, facets }) => {
  const { reset, control } = form;
  const clearFilter = () => {
    reset();
  };

  console.log(facets);
  return (
    <Card className="rounded py-3 flex-1">
      <CardContent className="px-3">
        <div className="flex flex-wrap items-center justify-between mb-2">
          <h5 className="m-0 font-semibold">Filter</h5>
          <Button
            // variant="secondary"
            className="hover:translate-0"
            size="xs"
            onClick={clearFilter}
          >
            Clear
          </Button>
        </div>

        <Form {...form}>
          <form id="filterForm">
            <Accordion type="multiple" collapsible>
              {Object.entries(facets)?.map(([key, value]) => {
                console.log(key, value);
                return (
                  <AccordionItem value={key} key={key}>
                    <FormField
                      control={control}
                      name={key}
                      render={({ field }) => (
                        <FormItem>
                          <AccordionTrigger>
                            <FormLabel className="text-base capitalize">
                              {key.split("_").join(" ")}
                            </FormLabel>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-2">
                              {value.map((filters) => (
                                <FormItem
                                  key={key + "-" + filters.value}
                                  className="flex items-center gap-2"
                                >
                                  <FormControl>
                                    <Checkbox
                                      className="size-3 rounded-xs"
                                      checked={
                                        field.value?.includes(filters.value) ||
                                        false
                                      }
                                      disabled={filters.count === 0}
                                      onCheckedChange={(checked) => {
                                        const current = field.value || [];
                                        field.onChange(
                                          checked
                                            ? [...current, filters.value]
                                            : current.filter(
                                                (v) => v !== filters.value
                                              )
                                        );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {filters.value} ({filters.count})
                                  </FormLabel>
                                </FormItem>
                              ))}
                              {/* {value.map((filters) => (
                              <p>
                                {filters.value} ({filters.count})
                              </p>
                            ))} */}
                              <FormMessage />
                            </div>
                          </AccordionContent>
                        </FormItem>
                      )}
                    />
                  </AccordionItem>
                );
              })}
            </Accordion>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="px-3">
        {/* <Button form="filterForm" variant="secondary" size="sm" type="submit">
          Apply
        </Button> */}
      </CardFooter>
    </Card>
  );
};

export default Filters;
