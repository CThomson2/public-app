import {
  Text,
  Flex,
  Box,
  Badge,
  HStack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { DataListItem, DataListRoot } from "@/components/ui/data-list";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { ProductPrice } from "../types";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductPrice | null;
}

export default function ProductModal({
  isOpen,
  onClose,
  product,
}: ProductModalProps) {
  if (!product) return null;

  return (
    <DialogRoot open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Text>SKU: {product.sku}</Text>
          <Text>Grade: {product.grade}</Text>
          <Flex mt={4} justify="space-between">
            {product.product_prices.map((price) => (
              <Box
                key={price.bottle_size_id}
                p={2}
                borderWidth="1px"
                borderRadius="md"
              >
                <Text>Volume: {price.bottle_sizes.volume}</Text>
                <Text>Price: £{price.price.toString()}</Text>
              </Box>
            ))}
          </Flex>
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
