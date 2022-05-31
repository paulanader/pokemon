import { useMemo } from 'react';

interface IProgressBarProps {
    value: number;
}

export const ProgressBar: React.FC<IProgressBarProps> = ({ value }) => {
    const finalValue = useMemo(() => (value > 100 ? 100 : value), [value]);

    return (
        <div className="progress" style={{ height: 5 }}>
            <div
                className={`progress-bar ${
                    finalValue >= 50
                        ? 'bg-success text-success'
                        : 'bg-danger text-danger'
                }`}
                role="progressbar"
                style={{ width: `${finalValue}%` }}
                aria-valuenow={finalValue}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                {finalValue}
            </div>
        </div>
    );
};
