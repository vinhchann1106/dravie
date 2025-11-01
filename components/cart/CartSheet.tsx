"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Trash2, X } from "lucide-react";
import Image from "next/image";
import useCart from "@/hooks/useCart";

function formatPrice(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

export default function CartSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { cart, handleRemove, clearCart } = useCart();
  const total = cart.reduce((sum, c) => sum + (c.price || 0), 0);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[460px] flex flex-col bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-5">
        {/* Header */}
        <SheetHeader className="flex flex-row justify-between items-center">
          <div>
            <div className="text-xl font-semibold text-slate-800">
              🛒 Giỏ khóa học
            </div>
            <p className="text-sm text-slate-500">{cart.length} mục</p>
          </div>

          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearCart}
                className="border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-all"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Xóa hết
              </Button>
            )}
          </div>
        </SheetHeader>

        {/* Danh sách khóa học */}
        <div className="flex-1 overflow-y-auto mt-6 space-y-4 pr-1">
          {cart.length === 0 ? (
            <div className="text-center text-slate-500 mt-10">
              <Image
                src="/empty-cart.svg"
                alt="Empty cart"
                width={160}
                height={160}
                className="mx-auto opacity-80"
              />
              <p className="mt-3 text-sm">Chưa có khóa học nào trong giỏ.</p>
            </div>
          ) : (
            cart.map((c) => (
              <div
                key={c.id}
                className="cursor-pointer rounded-md flex items-start justify-between gap-4 border border-slate-200 bg-white p-3 hover:shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:border-primary transition-all duration-200"
              >
                {/* Thumbnail */}
                {/* <div className="w-16 h-16 relative shrink-0 overflow-hidden border border-slate-200">
                  <Image
                    src={c.avatar}
                    alt={c.title}
                    fill
                    className="object-cover"
                  />
                </div> */}

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <span className="font-medium text-slate-800 leading-snug break-words">
                    {c.title}
                  </span>
                  <span className="text-[15px] font-semibold text-emerald-600 mt-1">
                    {formatPrice(c.price || 0)}
                  </span>
                </div>

                {/* Remove */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemove(c.id)}
                  className="text-red-400 hover:text-red-600 hover:bg-red-50 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">Tổng cộng</span>
              <span className="text-lg font-bold text-emerald-700">
                {formatPrice(total)}
              </span>
            </div>

            <Button
              className="w-full py-3 cursor-pointer bg-linear-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
              aria-label="Thanh toán"
            >
              Thanh toán ngay
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
