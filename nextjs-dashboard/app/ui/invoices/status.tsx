// app/ui/invoices/status.tsx

import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

// InvoiceStatus 컴포넌트 정의
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    // span 태그에 Tailwind CSS 클래스 조합 적용
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs', {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
      // 'pending' 상태일 때의 UI
        <>
          Pending {/* 텍스트 표시 */}
          <ClockIcon className="ml-1 w-4 text-gray-500" /> {/* 시계 아이콘 표시 */}
        </>
      ) : null}
      {status === 'paid' ? (
        // 'paid' 상태일 때의 UI
        <>
          Paid {/* 텍스트 표시 */}
          <CheckIcon className="ml-1 w-4 text-white" /> {/* 체크 아이콘 표시 */}
        </>
      ) : null}
    </span>
  );
}
