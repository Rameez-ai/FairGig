def get_analytics():
    return {
        "commission_trends": [
            {"platform": "Uber", "commission_rate": 18},
            {"platform": "Foodpanda", "commission_rate": 22},
            {"platform": "Careem", "commission_rate": 16}
        ],
        "income_distribution_by_zone": [
            {"zone": "Lahore Central", "median_income": 4200},
            {"zone": "Lahore East", "median_income": 3900},
            {"zone": "Lahore West", "median_income": 3600}
        ],
        "vulnerability_flags": [
            {"worker_id": 101, "drop_percentage": 24},
            {"worker_id": 102, "drop_percentage": 31}
        ],
        "top_complaint_categories": [
            {"category": "Low Rates", "count": 12},
            {"category": "Deactivation", "count": 8}
        ]
    }