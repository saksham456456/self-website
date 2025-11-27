from playwright.sync_api import sync_playwright, expect

def verify_gallery():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Check if we can reach localhost
        try:
            page = browser.new_page()
            print("Navigating to localhost:3000...")
            page.goto("http://localhost:3000")

            print("Looking for Gallery section...")
            # Wait for the heading to ensure page load
            heading = page.get_by_text("VISUAL GALLERY")
            expect(heading).to_be_visible(timeout=10000)

            # Scroll to it
            heading.scroll_into_view_if_needed()
            page.wait_for_timeout(1000) # Give animations a moment

            print("Checking for images...")
            # Check for one of the specific images we added
            # Note: The alt text is "AI generated abstract art" for gallery1
            img1 = page.get_by_alt_text("AI generated abstract art")
            expect(img1).to_be_visible()

            print("Taking screenshot...")
            page.screenshot(path="/home/jules/verification/gallery_fix.png", full_page=False)
            print("Success!")

        except Exception as e:
            print(f"Error: {e}")
            # Try to take a screenshot anyway if possible for debugging
            try:
                page.screenshot(path="/home/jules/verification/error_debug.png")
            except:
                pass
        finally:
            browser.close()

if __name__ == "__main__":
    verify_gallery()
