"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { ProductAttribute, ProductVariant } from "../../types";
import { useProductStore } from "@/stores/product_store";

interface Props{
  variants: ProductVariant[];
  attributes: ProductAttribute[];  
}

export default function SpecificationsTable({attributes , variants}: Props) {
  const selectedId = useProductStore((state) => state.selectedVariantId);
  const selectedVariant = variants.find((variant)=> variant.id === selectedId);

  if(!selectedVariant) return null; 

  const productAttributes = selectedVariant.attributes.length ?
  selectedVariant.attributes :
  attributes


  return (
    <div className="overflow-hidden bg-background mt-4">
      <Table>
        <TableBody>
          {productAttributes.map((attribute) => (
            <TableRow
              key={attribute.attribute.name}
              className="border-0"
            >
              <TableCell className="w-1/3 bg-muted/40 px-0.75 py-0.75 font-medium text-foreground">
              <div className="bg-[#e4f1fc] py-3 px-4">
                {attribute.attribute.name}
              </div>
                
              </TableCell>

              <TableCell className="py-0.75 px-0.75 text-muted-foreground">
                <div className="bg-[#f0f6fc] py-3 px-4">
                  {attribute.value}
                </div>                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}