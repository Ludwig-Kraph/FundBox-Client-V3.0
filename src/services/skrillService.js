const skrillEnabled = false; // Set to false since Skrill is not active

export const processSkrillPayment = async (amount, recipient) => {
    if (!skrillEnabled) {
        console.warn("Skrill service is disabled.");
        return;
    }

    try {
        const response = await fetch("/skrill/pay", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount, recipient }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error processing Skrill payment:", error);
        throw error;
    }
};
