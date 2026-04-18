def detect_anomalies(records):
    results = []

    if not records:
        return results

    avg_net = sum(r["net_received"] for r in records) / len(records)
    avg_deduction = sum(r["platform_deductions"] for r in records) / len(records)

    for r in records:
        explanations = []

        if r["net_received"] < avg_net * 0.7:
            explanations.append(
                f"Net income on {r['date']} is unusually low compared to recent average."
            )

        if r["platform_deductions"] > avg_deduction * 1.5:
            explanations.append(
                f"Deductions on {r['date']} are significantly higher than usual."
            )

        if explanations:
            results.append({
                "date": r["date"],
                "flagged": True,
                "explanations": explanations
            })

    return results